import { describe, it, expect } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useRatingStore } from '../../app/stores/rating'

describe('ratingStore', () => {
  setActivePinia(createPinia())

  it('initializes from query and produces query', () => {
    const s = useRatingStore()
    s.initFromQuery({ period: 'week', niche: 'edu', bmin: '10', bmax: '20', offset: '0', limit: '30' })
    const q = s.toQuery()
    expect(q.period).toBe('week')
    expect(q.niche).toBe('edu')
    expect(q.bmin).toBe(10)
    expect(q.bmax).toBe(20)
  })
})

