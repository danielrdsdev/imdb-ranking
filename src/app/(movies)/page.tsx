import { MoviesListSkeleton } from "@/components/movies-list-skeleton";
import { Search } from "@/components/search";
import { SearchSkeleton } from "@/components/search-skeleton";
import { Suspense } from "react";
import { GetMovies } from "./_components/get-movies";

export default function Home({
	searchParams,
}: {
	searchParams?: {
		query?: string;
	};
}) {
	const query = searchParams?.query || "";

	return (
		<>
			<div className="space-y-2">
				<h1 className="text-3xl font-semibold tracking-tight">Top 100</h1>
				<p className="text-sm text-muted-foreground">
					Lista dos 100 melhores filmes de todos os tempos ranqueados pelo IMDB.
				</p>
			</div>

			<Suspense fallback={<SearchSkeleton />}>
				<Search placeholder="Digite seu filme favorito" />
			</Suspense>

			<Suspense fallback={<MoviesListSkeleton />}>
				<GetMovies query={query} />
			</Suspense>
		</>
	);
}
