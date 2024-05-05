import { MoviesList } from "@/components/movies-list";
import { MoviesListSkeleton } from "@/components/movies-list-skeleton";
import { Search } from "@/components/search";
import { Suspense } from "react";

export const metadata = {
	title: "Séries",
	description:
		"Lista das 100 melhores séries de todos os tempos ranqueados pelo IMDB.",
};

export default function SeriesPage() {
	const url = process.env.API_URL as string;

	return (
		<>
			<div className="space-y-2">
				<h1 className="text-3xl font-semibold tracking-tight">Top 100</h1>
				<p className="text-sm text-muted-foreground">
					Lista das 100 melhores séries de todos os tempos ranqueados pelo IMDB.
				</p>
			</div>
			<Search />

			<Suspense fallback={<MoviesListSkeleton />}>
				<MoviesList url={`${url}/series`} />
			</Suspense>
		</>
	);
}
