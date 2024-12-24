'use client'

import { ThemeProvider } from 'next-themes'
import type { PropsWithChildren } from 'react'

export const Provider = ({ children }: PropsWithChildren) => {
	return (
		<ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
			{children}
		</ThemeProvider>
	)
}
