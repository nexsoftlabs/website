import { z } from 'zod'

export const contactServiceOptions = [
  'Not sure yet',
  'Software Consulting & Architecture',
  'Custom Web Application',
  'Mobile Application',
  'SaaS Product Engineering',
  'AI & Workflow Automation',
  'Cloud, APIs & Modernization',
] as const

export const serviceSlugToOption: Record<string, (typeof contactServiceOptions)[number]> = {
  'software-consulting': 'Software Consulting & Architecture',
  'web-development': 'Custom Web Application',
  'mobile-app-development': 'Mobile Application',
  'saas-development': 'SaaS Product Engineering',
  'ai-automation': 'AI & Workflow Automation',
  'cloud-modernization': 'Cloud, APIs & Modernization',
}

export const contactFormSchema = z.object({
  fullName: z.string().trim().min(2, 'Please enter your full name').max(120),
  email: z.string().trim().email('Please enter a valid email address').max(200),
  company: z.string().trim().max(160).optional(),
  service: z.enum(contactServiceOptions),
  budget: z.string().trim().max(80).optional(),
  timeline: z.string().trim().max(80).optional(),
  description: z
    .string()
    .trim()
    .min(20, 'Please share a bit more about your project (at least 20 characters)')
    .max(4000, 'Please keep your message under 4,000 characters'),
  consent: z.boolean().refine((val) => val === true, {
    message: 'Please accept the privacy policy to continue',
  }),
  website: z.string().max(0).optional(),
})

export type ContactFormSchema = z.infer<typeof contactFormSchema>
