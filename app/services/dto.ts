export type Period = 'week' | 'month' | 'avg3m'

export type ListItem = {
  publicId: string
  name: string | null
  isAnonymous: boolean
  topNiche: string | null
  metrics: Record<string, number | null>
}

export type ListResponse = {
  items: ListItem[]
  total: number
  offset: number
  limit: number
  hasMore: boolean
  nextOffset?: number
}

export type TargetologistProfile = {
  publicId: string
  name: string | null
  bio?: string | null
  topNiche?: string | null
  isAnonymous: boolean
}

export type AgencyProfile = {
  publicId: string
  name: string | null
  description?: string | null
  topNiche?: string | null
  isAnonymous: boolean
}

export type Contacts = {
  email?: string | null
  telegram?: string | null
  phone?: string | null
  website?: string | null
}

export type AliasResolve = { type: 'targetologist' | 'agency'; publicId: string }

export type Niche = { code: string; name: string }

export type Session = { authenticated: boolean; role?: 'owner' | 'viewer' | 'admin' }

