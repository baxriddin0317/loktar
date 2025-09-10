import { z } from 'zod'

export const ZListItem = z.object({
  publicId: z.string(),
  name: z.string().nullable(),
  isAnonymous: z.boolean(),
  topNiche: z.string().nullable(),
  metrics: z.record(z.number().nullable()),
})

export const ZListResponse = z.object({
  items: z.array(ZListItem),
  total: z.number(),
  offset: z.number(),
  limit: z.number(),
  hasMore: z.boolean(),
  nextOffset: z.number().optional(),
})

export const ZTargetologistProfile = z.object({
  publicId: z.string(),
  name: z.string().nullable(),
  bio: z.string().nullable().optional(),
  topNiche: z.string().nullable().optional(),
  isAnonymous: z.boolean(),
})

export const ZAgencyProfile = z.object({
  publicId: z.string(),
  name: z.string().nullable(),
  description: z.string().nullable().optional(),
  topNiche: z.string().nullable().optional(),
  isAnonymous: z.boolean(),
})

export const ZContacts = z.object({
  email: z.string().email().nullable().optional(),
  telegram: z.string().nullable().optional(),
  phone: z.string().nullable().optional(),
  website: z.string().url().nullable().optional(),
})

export const ZAliasResolve = z.object({
  type: z.enum(['targetologist', 'agency']),
  publicId: z.string(),
})

export const ZNiche = z.object({ code: z.string(), name: z.string() })

