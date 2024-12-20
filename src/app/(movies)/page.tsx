import { MoviesListSkeleton } from '@/components/movies-list-skeleton'
import { Search } from '@/components/search'
import { Suspense } from 'react'
import { GetMovies } from './_components/get-movies'

export default async function Home(props: {
	searchParams: Promise<{ query: string }>
}) {
	const searchParams = await props.searchParams
	const query = searchParams.query || ''

	return (
		<>
			<div className="space-y-2">
				<h1 className="font-semibold text-3xl tracking-tight">Top 100</h1>
				<p className="text-muted-foreground text-sm">
					Lista dos 100 melhores filmes de todos os tempos ranqueados pelo IMDB.
				</p>
			</div>

			<Search placeholder="Digite seu filme favorito" />

			<Suspense fallback={<MoviesListSkeleton />} key={query}>
				<GetMovies query={query} />
			</Suspense>
		</>
	)
}
