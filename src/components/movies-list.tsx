"use client";
import { MovieCard } from "@/components/movie-card";
import { useInfiniteScroll } from "@/hooks/use-infinite-scroll";
import { Props } from "@/types";
import { Loader } from "lucide-react";

type MoviesListProps = {
	query: string;
	data: Props[] | undefined;
};

export const MoviesList = ({ query, data }: MoviesListProps) => {
	if (!data) {
		return null;
	}
	const { loadingMore, isLoading } = useInfiniteScroll(data.length);
	const filteredData = data.slice(0, loadingMore);

	return (
		<div className="space-y-8">
			{data.length > 0 ? (
				filteredData.map((item) => <MovieCard key={item.id} movie={item} />)
			) : (
				<p className="text-muted-foreground font-medium text-center">
					<span className="text-primary">{query}</span> não está entre os 100
					melhores do IMDB.
				</p>
			)}
			{isLoading && loadingMore < data.length && (
				<div className="flex items-center justify-center">
					<Loader className="size-6 text-primary animate-spin" />
				</div>
			)}
		</div>
	);
};
