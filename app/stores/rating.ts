import { defineStore } from 'pinia'
import { services } from '~/services/api'
import type { ListItem } from '~/services/dto'

type Filters = {
  period: 'week' | 'month' | 'avg3m'
  niche?: string | null
  budgetMin?: number | null
  budgetMax?: number | null
  nicheBudgetMin?: number | null
  nicheBudgetMax?: number | null
}

type State = {
  filters: Filters
  items: ListItem[]
  offset: number
  limit: number
  total: number
  hasMore: boolean
  loading: boolean
  error: string | null
  scrollY: number
  _controller: AbortController | null
}

export const useRatingStore = defineStore('rating', {
  state: (): State => ({
    filters: { period: 'month', niche: null },
    items: [],
    offset: 0,
    limit: 30,
    total: 0,
    hasMore: true,
    loading: false,
    error: null,
    scrollY: 0,
    _controller: null,
  }),
  actions: {
    initFromQuery(routeQuery: Record<string, any>) {
      const q = routeQuery
      this.filters.period = (q.period as any) || 'month'
      this.filters.niche = (q.niche as string) || null
      this.filters.budgetMin = q.bmin ? Number(q.bmin) : null
      this.filters.budgetMax = q.bmax ? Number(q.bmax) : null
      this.filters.nicheBudgetMin = q.nbmin ? Number(q.nbmin) : null
      this.filters.nicheBudgetMax = q.nbmax ? Number(q.nbmax) : null
      this.offset = q.offset ? Number(q.offset) : 0
      this.limit = q.limit ? Number(q.limit) : 30
    },
    toQuery() {
      const q: Record<string, any> = { period: this.filters.period, offset: this.offset, limit: this.limit }
      if (this.filters.niche) q.niche = this.filters.niche
      if (this.filters.budgetMin != null) q.bmin = this.filters.budgetMin
      if (this.filters.budgetMax != null) q.bmax = this.filters.budgetMax
      if (this.filters.nicheBudgetMin != null) q.nbmin = this.filters.nicheBudgetMin
      if (this.filters.nicheBudgetMax != null) q.nbmax = this.filters.nicheBudgetMax
      return q
    },
    reset() {
      this.items = []
      this.offset = 0
      this.total = 0
      this.hasMore = true
      this.error = null
    },
    async applyFilters() {
      // Abort previous
      if (this._controller) this._controller.abort()
      this._controller = new AbortController()
      this.loading = true
      this.error = null
      this.items = []
      this.offset = 0
      try {
        const data = await services.getTargetologists({ ...this.filters, offset: 0, limit: this.limit })
        this.items = data.items
        this.total = data.total
        this.hasMore = data.hasMore
        this.offset = data.nextOffset ?? this.limit
      } catch (e: any) {
        this.error = e?.message || 'Failed to load rating'
      } finally {
        this.loading = false
      }
    },
    async loadMore() {
      if (this.loading || !this.hasMore) return
      this.loading = true
      try {
        const data = await services.getTargetologists({ ...this.filters, offset: this.offset, limit: this.limit })
        // dedupe by publicId
        const existing = new Set(this.items.map(i => i.publicId))
        const next = data.items.filter(i => !existing.has(i.publicId))
        this.items.push(...next)
        this.total = data.total
        this.hasMore = data.hasMore
        this.offset = data.nextOffset ?? this.offset + this.limit
      } catch (e: any) {
        this.error = e?.message || 'Failed to load more'
      } finally {
        this.loading = false
      }
    },
  },
})

