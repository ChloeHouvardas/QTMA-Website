import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

import { Footer } from "@/components/Footer";

import "./globals.scss";

const inter = Inter({
	display: "swap",
	subsets: ["latin"],
	variable: "--font-inter",
});

export const metadata: Metadata = {
	title: "QTMA | Building products and people",
	description:
		"Queen's Technology & Media Association is Canada's premier student-run product incubator.",
	icons: {
		icon: "/favicon.ico",
	},
};

type RootLayoutProps = Readonly<{
	children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html className={inter.variable} lang="en">
			<body className="flex min-h-screen flex-col">
				<div className="flex flex-1 flex-col">{children}</div>
				<Footer />
			</body>
		</html>
	);
}
