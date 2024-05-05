import { Props } from "@/types";

export const getData = async (url: string): Promise<Props[] | undefined> => {
	try {
		const res = await fetch(url, {
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
