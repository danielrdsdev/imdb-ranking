import { siteUrl } from '@/utils/env'
import { Github, Linkedin, type LucideIcon } from 'lucide-react'
import type { Metadata } from 'next'

type NavLink = {
	href: string
	label: string
}

type SocialLink = {
	href: string
	icon: LucideIcon
}

type SiteConfig = {
	metadata: Metadata
	navLinks: NavLink[]
	socialLinks: SocialLink[]
}

const siteName = 'IMDB Ranking'

export const siteConfig: SiteConfig = {
	metadata: {
		title: {
			default: siteName,
			template: `%s | ${siteName}`,
		},
		description:
			'Uma aplicação Next.js que exibe o ranking dos filmes no IMDB. Os dados são atualizados em tempo real e são gerados por esta aplicação.',
		authors: [{ name: siteName, url: siteUrl }],
		creator: siteName,
		publisher: siteName,
		openGraph: {
			siteName,
			title: siteName,
			url: siteUrl,
		},
	},
	navLinks: [
		{
			href: '/',
			label: 'Filmes',
		},
		{
			href: '/series',
			label: 'Séries',
		},
	],
	socialLinks: [
		{
			href: 'https://github.com/danielrdsdev',
			icon: Github,
		},
		{
			href: 'https://www.linkedin.com/in/danielrdsdev/',
			icon: Linkedin,
		},
	],
}
