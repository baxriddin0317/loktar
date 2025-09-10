import { useApi } from '~/composables/useApi'
import { ZAgencyProfile, ZAliasResolve, ZContacts, ZListResponse, ZTargetologistProfile, ZNiche } from './schemas'
import { mock } from '~/mocks'

export function createServices(controller?: AbortController) {
  const api = useApi(controller)
  const cfg = useRuntimeConfig()
  const useMock = cfg.public.useMock === true

  return {
    async getTargetologists(params: Record<string, any>) {
      const data = useMock ? await mock.getTargetologists(params) : await api.$get('/api-rating/v1/targetologists', { params })
      return ZListResponse.parse(data)
    },
    async getAgencies(params: Record<string, any>) {
      const data = useMock ? await mock.getAgencies(params) : await api.$get('/api-rating/v1/agencies', { params })
      return ZListResponse.parse(data)
    },
    async getTargetologistProfile(publicId: string) {
      const data = useMock ? await mock.getTargetologistProfile(publicId) : await api.$get(`/api-rating/v1/targetologists/${publicId}`)
      return ZTargetologistProfile.parse(data)
    },
    async getAgencyProfile(publicId: string) {
      const data = useMock ? await mock.getAgencyProfile(publicId) : await api.$get(`/api-rating/v1/agencies/${publicId}`)
      return ZAgencyProfile.parse(data)
    },
    async getTargetologistPhoto(publicId: string) {
      return useMock ? mock.getTargetologistPhoto(publicId) : api.$get<{ imageUrl: string }>(`/api-rating/v1/targetologists/${publicId}/photo`)
    },
    async getAgencyLogo(publicId: string) {
      return useMock ? mock.getAgencyLogo(publicId) : api.$get<{ imageUrl: string }>(`/api-rating/v1/agencies/${publicId}/logo`)
    },
    async getTargetologistContacts(publicId: string) {
      const data = useMock ? await mock.getTargetologistContacts(publicId) : await api.$get(`/api-rating/v1/targetologists/${publicId}/contacts`)
      return ZContacts.parse(data)
    },
    async getAgencyContacts(publicId: string) {
      const data = useMock ? await mock.getAgencyContacts(publicId) : await api.$get(`/api-rating/v1/agencies/${publicId}/contacts`)
      return ZContacts.parse(data)
    },
    async resolveAlias(alias: string) {
      const data = useMock ? await mock.resolveAlias(alias) : await api.$get(`/api-rating/v1/aliases/resolve/${alias}`)
      return ZAliasResolve.parse(data)
    },
    async checkAlias(alias: string) {
      return useMock ? mock.checkAlias(alias) : api.$get<{ available: boolean; reason?: string }>(`/api-rating/v1/aliases/check`, { params: { alias } })
    },
    async getNiches() {
      const data = useMock ? await mock.getNiches() : await api.$get(`/api-rating/v1/niches`)
      return ZNiche.array().parse(data)
    },
    async getSession() {
      return useMock ? mock.getSession() : api.$get<{ authenticated: boolean; role?: 'owner' | 'viewer' | 'admin' }>(`/api-rating/v1/auth/session`)
    },
  }
}

export const services = createServices()

