import { z } from 'zod'

export const contactServiceOptions = [
  'Software Consulting',
  'Web Application',
  'Mobile Application',
  'SaaS Development',
  'AI & Automation',
  'Cloud Modernization',
  'Other',
] as const

export const contactFormSchema = z.object({
  fullName: z.string().min(2, 'Please enter your full name'),
  email: z.string().email('Please enter a valid work email'),
  company: z.string().optional(),
  service: z.enum(contactServiceOptions),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  description: z
    .string()
    .min(20, 'Please share a bit more about your project (at least 20 characters)'),
  consent: z.boolean().refine((val) => val === true, {
    message: 'Please accept the privacy policy to continue',
  }),
  website: z.string().max(0).optional(),
})

export type ContactFormSchema = z.infer<typeof contactFormSchema>
