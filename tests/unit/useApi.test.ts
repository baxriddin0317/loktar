import { describe, it, expect } from 'vitest'
import { createApi } from '../../app/composables/useApi'

describe('useApi', () => {
  it('creates api instance', () => {
    // smoke: ensure functions exist
    const api = createApi()
    expect(api).toHaveProperty('$get')
    expect(api).toHaveProperty('$post')
    expect(api).toHaveProperty('$patch')
  })
})

