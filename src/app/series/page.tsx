import { MoviesListSkeleton } from '@/components/movies-list-skeleton'
import { Search } from '@/components/search'
import { Suspense } from 'react'
import { GetSeries } from './_components/get-series'

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
			<div className="space-y-2">
				<h1 className="font-semibold text-3xl tracking-tight">Top 100</h1>
				<p className="text-muted-foreground text-sm">
					Lista das 100 melhores séries de todos os tempos ranqueados pelo IMDB.
				</p>
			</div>

			<Search placeholder="Digite sua série favorita" />

			<Suspense fallback={<MoviesListSkeleton />} key={query}>
				<GetSeries query={query} />
			</Suspense>
		</>
	)
}
