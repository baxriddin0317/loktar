import type { Contacts, ListResponse, Niche, Session } from '~/services/dto'

const delay = (ms = 300) => new Promise(res => setTimeout(res, ms))

export const mock = {
  async getTargetologists(params: Record<string, any>): Promise<ListResponse> {
    await delay()
    const offset = Number(params.offset ?? 0)
    const limit = Number(params.limit ?? 30)
    const total = 120
    const items = Array.from({ length: Math.min(limit, Math.max(0, total - offset)) }, (_, i) => {
      const idNum = offset + i + 1
      const isAnonymous = idNum % 7 === 0
      return {
        publicId: String(idNum),
        name: isAnonymous ? null : `Таргетолог #${idNum}`,
        isAnonymous,
        topNiche: (['edu', 'ecom', 'fin'][idNum % 3] ?? null),
        metrics: { score: Math.round(Math.random() * 1000) },
      }
    })
    const nextOffset = offset + items.length
    return { items, total, offset, limit, hasMore: nextOffset < total, nextOffset }
  },

  async getAgencies(params: Record<string, any>): Promise<ListResponse> {
    await delay()
    const offset = Number(params.offset ?? 0)
    const limit = Number(params.limit ?? 30)
    const total = 60
    const items = Array.from({ length: Math.min(limit, Math.max(0, total - offset)) }, (_, i) => {
      const idNum = offset + i + 1
      const isAnonymous = idNum % 5 === 0
      return {
        publicId: `a${idNum}`,
        name: isAnonymous ? null : `Агентство #${idNum}`,
        isAnonymous,
        topNiche: (['edu', 'ecom', 'fin'][idNum % 3] ?? null),
        metrics: { score: Math.round(Math.random() * 1000) },
      }
    })
    const nextOffset = offset + items.length
    return { items, total, offset, limit, hasMore: nextOffset < total, nextOffset }
  },

  async getTargetologistProfile(publicId: string) {
    await delay()
    const idNum = Number(publicId)
    const isAnonymous = idNum % 7 === 0
    return { publicId, name: isAnonymous ? null : `Таргетолог #${publicId}`, isAnonymous, topNiche: 'edu' }
  },

  async getAgencyProfile(publicId: string) {
    await delay()
    const isAnonymous = publicId.endsWith('0')
    return { publicId, name: isAnonymous ? null : `Агентство ${publicId}`, isAnonymous, topNiche: 'ecom' }
  },

  async getTargetologistPhoto(publicId: string) {
    await delay(100)
    return { imageUrl: `https://picsum.photos/seed/t${publicId}/200/200?v=1` }
  },

  async getAgencyLogo(publicId: string) {
    await delay(100)
    return { imageUrl: `https://picsum.photos/seed/a${publicId}/200/200?v=1` }
  },

  async getTargetologistContacts(publicId: string): Promise<Contacts> {
    await delay()
    return { email: `t${publicId}@example.com`, telegram: `@t${publicId}` }
  },

  async getAgencyContacts(publicId: string): Promise<Contacts> {
    await delay()
    return { email: `a${publicId}@example.com`, website: `https://agency${publicId}.example.com` }
  },

  async resolveAlias(alias: string) {
    await delay(100)
    const type = alias.startsWith('a') ? 'agency' : 'targetologist'
    const publicId = alias.replace(/^a/, '') || '1'
    return { type, publicId }
  },

  async checkAlias(alias: string) {
    await delay(100)
    return { available: alias.length > 2 }
  },

  async getNiches(): Promise<Niche[]> {
    await delay(50)
    return [
      { code: 'edu', name: 'Образование' },
      { code: 'ecom', name: 'E-commerce' },
      { code: 'fin', name: 'Финансы' },
    ]
  },

  async getSession(): Promise<Session> {
    await delay(100)
    return { authenticated: false }
  },
}

