import { MoviesList } from "@/components/movies-list";
import { Props } from "@/types";

const getData = async (query: string): Promise<Props[] | undefined> => {
	try {
		const res = await fetch(`${process.env.API_URL}/series?query=${query}`, {
			method: "GET",
			headers: {
				"X-RapidAPI-Key": process.env.API_KEY as string,
				"X-RapidAPI-Host": process.env.API_HOST as string,
			},
			next: {
				revalidate: 60 * 60 * 24, // 24 hours
			},
		});

		if (!res.ok) {
			throw new Error(`HTTP error! status: ${res.status}`);
		}

		return res.json();
	} catch (error) {
		console.log(error);
	}
};

export const GetSeries = async ({ query }: { query: string }) => {
	const data = await getData(query);

	if (!data) {
		return null;
	}

	const filteredData = data.filter((item) =>
		item.title.toLowerCase().includes(query.toLowerCase()),
	);

	return <MoviesList query={query} data={filteredData} />;
};
