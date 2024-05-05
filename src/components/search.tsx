"use client";

import { SearchIcon } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { Input } from "./ui/input";

export const Search = ({ placeholder }: { placeholder: string }) => {
	const searchParams = useSearchParams();
	const search = searchParams.get("query")?.toString();
	const pathname = usePathname();
	const { replace } = useRouter();

	const handleSearch = useDebouncedCallback((term) => {
		const params = new URLSearchParams(searchParams);
		if (term) {
			params.set("query", term);
		} else {
			params.delete("query");
		}
		replace(`${pathname}?${params.toString()}`);
	}, 300);

	return (
		<div className="relative flex items-center">
			<SearchIcon className="size-4 absolute left-4" />
			<Input
				placeholder={placeholder}
				onChange={(e) => {
					handleSearch(e.target.value);
				}}
				defaultValue={search}
				className="pl-10"
			/>
		</div>
	);
};
