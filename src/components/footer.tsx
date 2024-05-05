import { socialLinks } from "@/config/nav";
import { Button } from "./ui/button";

export const Footer = () => {
	return (
		<footer className="py-6 flex flex-col gap-4 items-center justify-center">
			<p className="text-muted-foreground text-sm">
				Made by{" "}
				<a
					href="https://danielrds.dev"
					target="_blank"
					rel="noreferrer noopener"
					className="text-primary font-medium hover:underline underline-offset-2"
				>
					Daniel Rodrigues
				</a>
			</p>

			<div className="flex items-center gap-2">
				{socialLinks.map((link) => (
					<Button asChild size="icon" variant="ghost">
						<a href={link.href} target="_blank" rel="noreferrer noopener">
							<link.icon className="size-5" />
						</a>
					</Button>
				))}
			</div>
		</footer>
	);
};
