import { MoviesList } from '@/components/movies-list'
import { getSeries } from '@/services/get-series'

export const GetSeries = async ({ query }: { query: string }) => {
	const data = await getSeries(query)

	if (!data) {
		return null
	}

	const filteredData = data.filter((item) =>
		item.title.toLowerCase().includes(query?.toLowerCase())
	)

	return <MoviesList query={query} data={filteredData} />
}
