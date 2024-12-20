import { api } from '@/lib/api'
import { Props } from '@/types'

type SeriesResponse = Props[]

export const getSeries = async (
	query: string
): Promise<SeriesResponse | undefined> => {
	try {
		const data = await api
			.get('series', {
				searchParams: {
					query,
				},
			})
			.json<SeriesResponse>()

		return data
	} catch (error) {
		console.log(error)
	}
}
