import { Header } from "@/components/header";
import { Provider } from "@/components/provider";
import { inter, titanOne } from "@/styles/font";
import type { Metadata } from "next";
import "../styles/globals.css";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
	title: "IMDB Ranking",
	description:
		"Uma aplicação Next.js que exibe o ranking dos filmes no IMDB. Os dados são atualizados em tempo real e são gerados por esta aplicação.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.variable} ${titanOne.variable}`}>
				<Provider>
					<Header />
					<main className="flex-1 container">{children}</main>
					<Footer />
				</Provider>
			</body>
		</html>
	);
}
