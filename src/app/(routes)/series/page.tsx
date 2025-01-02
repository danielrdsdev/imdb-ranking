import { Suspense } from 'react'

import { GetSeries } from '@/components/pages/series/get-series'
import { MovieListSkeleton } from '@/components/shared/movie-list-skeleton'
import { PageTitle } from '@/components/shared/page-title'
import { Search } from '@/components/shared/search'

export const metadata = {
	title: 'Séries',
	description:
		'Lista das 100 melhores séries de todos os tempos ranqueados pelo IMDB.',
}

export default async function SeriesPage(props: {
	searchParams: Promise<{ query: string }>
}) {
	const searchParams = await props.searchParams
	const query = searchParams.query || ''

	return (
		<>
			<PageTitle
				title="Top 100 séries"
				description="Lista das 100 melhores séries de todos os tempos de acordo com o IMDB."
			/>

			<Search placeholder="Digite sua série favorita" />

			<Suspense fallback={<MovieListSkeleton />} key={query}>
				<GetSeries query={query} />
			</Suspense>
		</>
	)
}
