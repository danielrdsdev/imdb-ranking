import { MoviesList } from "@/components/movies-list";
import { MoviesListSkeleton } from "@/components/movies-list-skeleton";
import { Search } from "@/components/search";
import { Suspense } from "react";

export default function Home() {
	const url = process.env.API_URL as string;

	return (
		<>
			<div className="space-y-2">
				<h1 className="text-3xl font-semibold tracking-tight">Top 100</h1>
				<p className="text-sm text-muted-foreground">
					Lista dos 100 melhores filmes de todos os tempos ranqueados pelo IMDB.
				</p>
			</div>

			<Search />

			<Suspense fallback={<MoviesListSkeleton />}>
				<MoviesList url={url} />
			</Suspense>
		</>
	);
}
