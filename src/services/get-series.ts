import { api } from '@/lib/api'
import type { Props } from '@/types'

type SeriesResponse = Props[]

export const getSeries = async (): Promise<SeriesResponse | undefined> => {
	try {
		const data = await api.get('series').json<SeriesResponse>()

		return data
	} catch (error) {
		console.log(error)
	}
}
