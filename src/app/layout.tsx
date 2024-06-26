import { BackToTop } from "@/components/back-to-top";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Provider } from "@/components/provider";
import { inter, titanOne } from "@/styles/font";
import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import NextTopLoader from "nextjs-toploader";
import "../styles/globals.css";

export const metadata: Metadata = {
	title: {
		default: "IMDB Ranking",
		template: "%s | IMDB Ranking",
	},
	description:
		"Uma aplicação Next.js que exibe o ranking dos filmes no IMDB. Os dados são atualizados em tempo real e são gerados por esta aplicação.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ViewTransitions>
			<html lang="en" suppressHydrationWarning>
				<body className={`${inter.variable} ${titanOne.variable}`}>
					<Provider>
						<NextTopLoader color="#FACC16" />
						<Header />
						<main className="flex-1 py-10 space-y-10 container">
							{children}
						</main>
						<Footer />

						<BackToTop />
					</Provider>
				</body>
			</html>
		</ViewTransitions>
	);
}
