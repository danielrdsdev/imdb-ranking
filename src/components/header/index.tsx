import { navLinks } from "@/config/nav";
import Link from "next/link";
import { Separator } from "../ui/separator";
import { MobileNav } from "./mobile-nav";
import { ModeToggle } from "./mode-toggle";
import { NavLink } from "./nav-link";

export const Header = () => {
	return (
		<header className="h-20 border-b">
			<div className="flex items-center justify-between container h-full">
				<Link
					href="/"
					className="text-lg font-titanOne inline-flex items-center gap-2"
				>
					<span className="bg-primary text-xl px-2 py-1 rounded-md text-primary-foreground">
						IMDB
					</span>{" "}
					Ranking
				</Link>

				<div className="hidden sm:flex items-center gap-8">
					<nav className="flex items-center gap-6">
						{navLinks.map((link) => (
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
	);
};
