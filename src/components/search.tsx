'use client'

import { useSearch } from '@/hooks/use-search'
import { SearchIcon } from 'lucide-react'
import { Input } from './ui/input'

export const Search = ({ placeholder }: { placeholder: string }) => {
	const { search, handleSearch } = useSearch()

	return (
		<div className="relative flex items-center">
			<SearchIcon className="left-4 absolute size-4" />
			<Input
				placeholder={placeholder}
				onChange={(e) => {
					handleSearch(e.target.value)
				}}
				defaultValue={search}
				className="pl-10"
			/>
		</div>
	)
}
