import { getFilteredData } from '@/constants/filtered-data'
import { getMovies } from '@/services/get-movies'

import { MovieList } from '@/components/shared/movie-list'

export const GetMovies = async ({ query }: { query: string }) => {
	const data = await getMovies()
	const filteredData = getFilteredData(data, query)

	return <MovieList query={query} data={filteredData} />
}
