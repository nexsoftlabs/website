import { z } from 'zod'

export const enquirySchema = z.object({
  fullName: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(200),
  company: z.string().trim().max(160).optional(),
  service: z.string().trim().min(1).max(80),
  budget: z.string().trim().max(80).optional(),
  timeline: z.string().trim().max(80).optional(),
  description: z.string().trim().min(20).max(4000),
  website: z.string().max(0).optional(),
})

export type EnquiryValues = z.infer<typeof enquirySchema>
