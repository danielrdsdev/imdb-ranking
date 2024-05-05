import { MoviesListSkeleton } from "@/components/movies-list-skeleton";
import { Search } from "@/components/search";
import { SearchSkeleton } from "@/components/search-skeleton";
import { Suspense } from "react";
import { SeriesList } from "./_components/series-list";

export const metadata = {
	title: "Séries",
	description:
		"Lista das 100 melhores séries de todos os tempos ranqueados pelo IMDB.",
};

export default function SeriesPage({
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
					Lista das 100 melhores séries de todos os tempos ranqueados pelo IMDB.
				</p>
			</div>

			<Suspense fallback={<SearchSkeleton />}>
				<Search />
			</Suspense>

			<Suspense fallback={<MoviesListSkeleton />}>
				<SeriesList query={query} />
			</Suspense>
		</>
	);
}
