import { apiHost, apiKey, apiUrl } from '@/utils/env'
import ky from 'ky'

export const api = ky.create({
	prefixUrl: apiUrl,
	headers: {
		'X-RapidAPI-Key': apiKey,
		'X-RapidAPI-Host': apiHost,
	},
	cache: 'force-cache',
	next: {
		revalidate: 60 * 60 * 24, // 24 hours
	},
})
