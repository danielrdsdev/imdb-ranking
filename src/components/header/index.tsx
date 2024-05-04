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
			<h1 className="text-lg font-titanOne inline-flex items-center gap-2">
				<span className="bg-[#F5C519] text-xl px-2 py-1 rounded-md text-primary-foreground">
					IMDB
				</span>{" "}
				Ranking
			</h1>

			<nav className="flex items-center gap-4">
				{navLinks.map((link) => (
					<NavLink key={link.href} href={link.href}>
						{link.label}
					</NavLink>
				))}
			</nav>
		</header>
	);
};
