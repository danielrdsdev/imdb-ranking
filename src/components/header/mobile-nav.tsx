"use client";
import { navLinks } from "@/config/nav";
import { PopoverClose } from "@radix-ui/react-popover";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { NavLink } from "./nav-link";

export const MobileNav = () => {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button size="icon" variant="ghost">
					<Menu className="size-5" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="flex flex-col items-center w-48 divide-y">
				{navLinks.map((link) => (
					<PopoverClose key={link.href} asChild>
						<NavLink href={link.href} className="w-full py-3 text-center">
							{link.label}
						</NavLink>
					</PopoverClose>
				))}
			</PopoverContent>
		</Popover>
	);
};
