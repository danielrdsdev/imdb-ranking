"use client";

import { SearchIcon } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Input } from "./ui/input";

export const Search = () => {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();

	const handleSearch = (term: string) => {
		const params = new URLSearchParams(searchParams);

		if (term) {
			params.set("query", term);
		} else {
			params.delete("query");
		}
		replace(`${pathname}?${params.toString()}`);
	};

	return (
		<div className="relative flex items-center">
			<SearchIcon className="size-4 absolute left-4" />
			<Input
				onChange={(e) => handleSearch(e.target.value)}
				defaultValue={searchParams.get("search")?.toString()}
				placeholder="Digite seu filme favorito"
				className="pl-10"
			/>
		</div>
	);
};
