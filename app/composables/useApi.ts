import { ofetch, type FetchOptions } from 'ofetch'

export type NormalizedApiError = {
  status: number
  code?: string
  message: string
  fieldErrors?: Record<string, string[]>
  correlationId?: string
}

export type ApiInstance = ReturnType<typeof createApi>

export function createApi(controller?: AbortController) {
  const config = useRuntimeConfig()

  const api = ofetch.create({
    baseURL: config.public.apiBaseUrl,
    credentials: 'include',
    retry: 0,
    timeout: 12000,
    onRequest({ options }) {
      if (controller) options.signal = controller.signal
    },
    async onResponseError({ response }) {
      // Let callers handle via thrown normalized error
      throw normalizeError(response)
    },
  })

  function normalizeError(res: Response): NormalizedApiError {
    const status = res.status
    return res
      .json()
      .then((data: any) => {
        return {
          status,
          code: data?.code,
          message: data?.message || res.statusText,
          fieldErrors: data?.fieldErrors,
          correlationId: data?.correlationId,
        } satisfies NormalizedApiError
      })
      .catch(() => ({
        status,
        message: res.statusText,
      } as NormalizedApiError)) as unknown as NormalizedApiError
  }

  async function $get<T>(url: string, options?: FetchOptions<'json'>) {
    return api<T>(url, { ...options, method: 'GET' })
  }

  async function $post<T>(url: string, body?: BodyInit | Record<string, any> | null, options?: FetchOptions<'json'>) {
    return api<T>(url, { ...options, method: 'POST', body })
  }

  async function $patch<T>(url: string, body?: BodyInit | Record<string, any> | null, options?: FetchOptions<'json'>) {
    return api<T>(url, { ...options, method: 'PATCH', body })
  }

  return { $get, $post, $patch }
}

export function useApi(controller?: AbortController) {
  return createApi(controller)
}

