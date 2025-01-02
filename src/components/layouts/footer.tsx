import { siteConfig } from '@/config/site'

import { Button } from '@/components/ui/button'

export const Footer = () => {
	return (
		<footer className="flex flex-col justify-center items-center gap-4 py-6">
			<p className="text-muted-foreground text-sm">
				Made by{' '}
				<a
					href="https://danielrds.dev"
					target="_blank"
					rel="noreferrer noopener"
					className="font-medium text-primary underline-offset-2 hover:underline"
				>
					Daniel Rodrigues
				</a>
			</p>

			<div className="flex items-center gap-2">
				{siteConfig.socialLinks.map((link) => (
					<Button key={link.href} asChild size="icon" variant="ghost">
						<a href={link.href} target="_blank" rel="noreferrer noopener">
							<link.icon className="size-5" />
							<span className="sr-only">Social icon</span>
						</a>
					</Button>
				))}
			</div>
		</footer>
	)
}
