import { Separator } from '@/components/ui/separator'
import { siteConfig } from '@/config/site'
import { Link } from 'next-view-transitions'
import { MobileNav } from './mobile-nav'
import { ModeToggle } from './mode-toggle'
import { NavLink } from './nav-link'

export const Header = () => {
	return (
		<header className="border-b h-20">
			<div className="flex justify-between items-center h-full container">
				<Link
					href="/"
					className="inline-flex items-center gap-2 font-titanOne text-lg"
				>
					<span className="bg-primary px-2 py-1 rounded-md text-primary-foreground text-xl">
						IMDB
					</span>{' '}
					Ranking
				</Link>

				<div className="sm:flex items-center gap-8 hidden">
					<nav className="flex items-center gap-6">
						{siteConfig.navLinks.map((link) => (
							<NavLink key={link.href} href={link.href}>
								{link.label}
							</NavLink>
						))}
					</nav>

					<Separator orientation="vertical" className="h-6" />

					<ModeToggle />
				</div>

				<div className="sm:hidden">
					<MobileNav />
				</div>
			</div>
		</header>
	)
}
