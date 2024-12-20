import ky from 'ky'
import { apiHost, apiKey, apiUrl } from './env'

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
