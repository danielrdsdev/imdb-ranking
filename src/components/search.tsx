"use client";

import { SearchIcon } from "lucide-react";
import { Input } from "./ui/input";

export const Search = () => {
	return (
		<div className="relative flex items-center">
			<SearchIcon className="size-4 absolute left-4" />
			<Input placeholder="Digite seu filme favorito" className="pl-10" />
		</div>
	);
};
