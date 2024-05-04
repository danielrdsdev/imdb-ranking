import { Props } from "@/types";

export const fetchImdb = async (): Promise<Props[] | undefined> => {
	try {
		const response = await fetch(process.env.API_URL as string, {
			method: "GET",
			headers: {
				"X-RapidAPI-Key": process.env.API_KEY as string,
				"X-RapidAPI-Host": process.env.API_HOST as string,
			},
		});

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		return await response.json();
	} catch (error) {
		console.log(error);
	}
};
