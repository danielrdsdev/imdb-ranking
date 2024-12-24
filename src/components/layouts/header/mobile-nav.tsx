import { Button } from '@/components/ui/button'
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover'
import { siteConfig } from '@/config/site'
import { PopoverClose } from '@radix-ui/react-popover'
import { Menu } from 'lucide-react'
import { NavLink } from './nav-link'

export const MobileNav = () => {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button size="icon" variant="ghost">
					<Menu className="size-5" />
					<span className="sr-only">Menu</span>
				</Button>
			</PopoverTrigger>
			<PopoverContent className="flex flex-col items-center divide-y w-48">
				{siteConfig.navLinks.map((link) => (
					<PopoverClose key={link.href} asChild>
						<NavLink href={link.href} className="py-3 w-full text-center">
							{link.label}
						</NavLink>
					</PopoverClose>
				))}
			</PopoverContent>
		</Popover>
	)
}
