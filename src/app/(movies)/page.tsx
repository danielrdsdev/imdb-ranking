import { MovieListSkeleton } from '@/components/shared/movie-list-skeleton'
import { PageTitle } from '@/components/shared/page-title'
import { Search } from '@/components/shared/search'
import { Suspense } from 'react'
import { GetMovies } from '../../components/pages/movies/get-movies'

export default async function Home(props: {
	searchParams: Promise<{ query: string }>
}) {
	const searchParams = await props.searchParams
	const query = searchParams.query || ''

	return (
		<>
			<PageTitle
				title="Top 100 filmes"
				description="Lista dos 100 melhores filmes de todos os tempo de acordo com o IMDB."
			/>

			<Search placeholder="Digite seu filme favorito" />

			<Suspense fallback={<MovieListSkeleton />} key={query}>
				<GetMovies query={query} />
			</Suspense>
		</>
	)
}
