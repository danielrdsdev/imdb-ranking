'use client'

import Form from 'next/form'
import { usePathname } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export const Search = ({ placeholder }: { placeholder: string }) => {
	const pathname = usePathname()

	return (
		<Form action={pathname} className="relative flex items-center w-full">
			<Input name="query" placeholder={placeholder} className="flex-1" />

			<Button type="submit" className="right-0 absolute">
				Buscar
			</Button>
		</Form>
	)
}
