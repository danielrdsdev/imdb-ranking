import Link from "next/link";
import { Separator } from "../ui/separator";
import { ModeToggle } from "./mode-toggle";
import { NavLink } from "./nav-link";

const navLinks = [
	{
		href: "/",
		label: "Filmes",
	},
	{
		href: "/series",
		label: "Séries",
	},
];

export const Header = () => {
	return (
		<header className="h-16 container flex items-center justify-between">
			<Link
				href="/"
				className="text-lg font-titanOne inline-flex items-center gap-2"
			>
				<span className="bg-[#F5C519] text-xl px-2 py-1 rounded-md text-primary-foreground">
					IMDB
				</span>{" "}
				Ranking
			</Link>

			<div className="flex items-center gap-8">
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
		</header>
	);
};
