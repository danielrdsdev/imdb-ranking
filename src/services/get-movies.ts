import { api } from '@/lib/api'
import type { Props } from '@/types'

type MoviesResponse = Props[]

export const getMovies = async (): Promise<MoviesResponse | undefined> => {
	try {
		const data = await api.get('').json<MoviesResponse>()

		return data
	} catch (error) {
		console.log(error)
	}
}
