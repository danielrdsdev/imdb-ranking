import { fetchImdb } from "@/lib/fetch";
import { MovieCard } from "./movie-card";

export const MoviesList = async () => {
	const getMovies = await fetchImdb();

	if (!getMovies) {
		return null;
	}

	return (
		<div className="space-y-8">
			{getMovies.map((item) => (
				<MovieCard key={item.id} movie={item} />
			))}
		</div>
	);
};
