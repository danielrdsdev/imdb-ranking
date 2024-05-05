"use client";
import { MovieCard } from "@/components/movie-card";
import { Button } from "@/components/ui/button";
import { Props } from "@/types";
import { useState } from "react";

type SeriesListProps = {
	query: string;
	data: Props[] | undefined;
};

export const SeriesList = ({ query, data }: SeriesListProps) => {
	if (!data) {
		return null;
	}

	const [loadingMore, setLoadingMore] = useState(10);

	const handleLoadMore = () => {
		setLoadingMore((prev) => prev + 10);
	};

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

			{data.length > loadingMore && (
				<div className="flex items-center justify-center">
					<Button onClick={handleLoadMore}>Carregar mais</Button>
				</div>
			)}
		</div>
	);
};
