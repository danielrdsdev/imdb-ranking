import { getData } from "@/lib/fetch";
import { MovieCard } from "./movie-card";

export const MoviesList = async ({ url }: { url: string }) => {
	const data = await getData(url);

	if (!data) {
		return null;
	}

	return (
		<div className="space-y-8">
			{data.map((item) => (
				<MovieCard key={item.id} movie={item} />
			))}
		</div>
	);
};
