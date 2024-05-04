import { MoviesList } from "@/components/movies-list";
import { MoviesListSkeleton } from "@/components/movies-list-skeleton";
import { Search } from "@/components/search";
import { Suspense } from "react";

export default function Home() {
	return (
		<div className="space-y-8 py-16 w-full">
			<div className="space-y-2">
				<h2 className="text-3xl font-semibold tracking-tight">Top 100</h2>
				<p className="text-sm text-muted-foreground">
					Lista dos 100 melhores filmes de todos os tempos ranqueados pelo IMDB.
				</p>
			</div>
			<Suspense>
				<Search />
			</Suspense>

			<Suspense fallback={<MoviesListSkeleton />}>
				<MoviesList />
			</Suspense>
		</div>
	);
}
