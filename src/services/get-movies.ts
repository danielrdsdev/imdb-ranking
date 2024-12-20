import { api } from '@/lib/api'
import { Props } from '@/types'

type MoviesResponse = Props[]

export const getMovies = async (
	query: string
): Promise<MoviesResponse | undefined> => {
	try {
		const data = await api
			.get('', {
				searchParams: {
					query,
				},
			})
			.json<MoviesResponse>()

		return data
	} catch (error) {
		console.log(error)
	}
}
