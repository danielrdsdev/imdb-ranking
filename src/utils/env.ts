import { z } from 'zod'

const envSchema = z.object({
	API_URL: z.string().url(),
	API_KEY: z.string(),
	API_HOST: z.string(),
	NEXT_PUBLIC_VERCEL_URL: z.string().url(),
})

const env = envSchema.parse(process.env)

export const {
	API_URL: apiUrl,
	API_KEY: apiKey,
	API_HOST: apiHost,
	NEXT_PUBLIC_VERCEL_URL: siteUrl,
} = env
