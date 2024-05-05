import { MoviesList } from "@/components/movies-list";
import { MoviesListSkeleton } from "@/components/movies-list-skeleton";
import { Search } from "@/components/search";
import { Suspense } from "react";

export default function SeriesPage() {
	const url = process.env.API_URL as string;

	return (
		<div className="space-y-8 py-16 w-full">
			<div className="space-y-2">
				<h2 className="text-3xl font-semibold tracking-tight">Top 100</h2>
				<p className="text-sm text-muted-foreground">
					Lista das 100 melhores séries de todos os tempos ranqueados pelo IMDB.
				</p>
			</div>
			<Suspense>
				<Search />
			</Suspense>

			<Suspense fallback={<MoviesListSkeleton />}>
				<MoviesList url={`${url}/series`} />
			</Suspense>
		</div>
	);
}
