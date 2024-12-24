'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Form from 'next/form'
import { usePathname } from 'next/navigation'

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
