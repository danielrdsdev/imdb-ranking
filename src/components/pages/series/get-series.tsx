import { getFilteredData } from '@/constants/filtered-data'
import { getSeries } from '@/services/get-series'

import { MovieList } from '@/components/shared/movie-list'

export const GetSeries = async ({ query }: { query: string }) => {
	const data = await getSeries()
	const filteredData = getFilteredData(data, query)

	return <MovieList query={query} data={filteredData} />
}
