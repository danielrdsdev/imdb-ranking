import { Github, Linkedin, LucideIcon } from "lucide-react";

type NavLink = {
	href: string;
	label: string;
};

type SocialLink = {
	href: string;
	icon: LucideIcon;
};

export const navLinks: NavLink[] = [
	{
		href: "/",
		label: "Filmes",
	},
	{
		href: "/series",
		label: "Séries",
	},
];

export const socialLinks: SocialLink[] = [
	{
		href: "https://github.com/danielrdsdev",
		icon: Github,
	},
	{
		href: "https://www.linkedin.com/in/danielrdsdev/",
		icon: Linkedin,
	},
];
