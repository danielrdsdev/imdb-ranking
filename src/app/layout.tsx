import { BackToTop } from '@/components/back-to-top'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Provider } from '@/components/provider'
import { siteConfig } from '@/config/site'
import { inter, titanOne } from '@/styles/font'
import { ViewTransitions } from 'next-view-transitions'
import NextTopLoader from 'nextjs-toploader'
import '../styles/globals.css'

export const metadata = siteConfig.metadata

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<ViewTransitions>
			<html lang="pt-BR" suppressHydrationWarning>
				<body className={`${inter.variable} ${titanOne.variable}`}>
					<Provider>
						<NextTopLoader color="#FACC16" />
						<Header />
						<main className="flex-1 space-y-10 py-10 container">
							{children}
						</main>
						<Footer />

						<BackToTop />
					</Provider>
				</body>
			</html>
		</ViewTransitions>
	)
}
