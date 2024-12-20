'use client'

import { SearchIcon } from 'lucide-react'
import Form from 'next/form'
import { usePathname } from 'next/navigation'
import { Button } from './ui/button'
import { Input } from './ui/input'

export const Search = ({ placeholder }: { placeholder: string }) => {
	const pathname = usePathname()

	return (
		<Form action={pathname} className="flex items-center gap-2 w-full">
			<div className="relative flex flex-1 items-center">
				<SearchIcon className="left-4 absolute size-4" />
				<Input name="query" placeholder={placeholder} className="pl-10" />
			</div>

			<Button type="submit">Pesquisar</Button>
		</Form>
	)
}
