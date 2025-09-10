import { defineStore } from 'pinia'
import { services } from '~/services/api'

type State = {
  authenticated: boolean | null
  role: 'owner' | 'viewer' | 'admin' | null
  loading: boolean
}

export const useSessionStore = defineStore('session', {
  state: (): State => ({ authenticated: null, role: null, loading: false }),
  actions: {
    async fetchSession() {
      if (this.loading) return
      this.loading = true
      try {
        const data = await services.getSession()
        this.authenticated = data.authenticated
        this.role = (data.role as any) ?? null
      } catch {
        this.authenticated = false
        this.role = null
      } finally {
        this.loading = false
      }
    },
  },
})

