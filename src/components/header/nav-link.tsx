"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps } from "react";

export const NavLink = (props: ComponentProps<typeof Link>) => {
	const pathname = usePathname();

	return (
		<Link
			{...props}
			data-active={pathname === props.href}
			className={cn(
				"font-medium text-sm text-muted-foreground hover:text-primary transition-colors data-[active=true]:text-primary data-[active=true]:font-semibold",
			)}
		/>
	);
};
