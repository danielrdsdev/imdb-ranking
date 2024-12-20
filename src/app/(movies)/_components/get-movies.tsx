import { MoviesList } from '@/components/movies-list'
import { getMovies } from '@/services/get-movies'

export const GetMovies = async ({ query }: { query: string }) => {
	const data = await getMovies(query)

	if (!data) {
		return null
	}

	const filteredData = data.filter((item) =>
		item.title.toLowerCase().includes(query?.toLowerCase())
	)

	return <MoviesList query={query} data={filteredData} />
}
