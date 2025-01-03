'use client'

import { Link } from 'next-view-transitions'
import { usePathname } from 'next/navigation'
import type { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

export const NavLink = (props: ComponentProps<typeof Link>) => {
	const pathname = usePathname()

	return (
		<Link
			{...props}
			data-active={pathname === props.href}
			className={cn(
				'font-medium text-sm text-muted-foreground hover:text-primary transition-colors data-[active=true]:text-primary data-[active=true]:font-semibold',
				props.className
			)}
		/>
	)
}
