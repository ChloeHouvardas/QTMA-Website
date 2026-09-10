import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.scss";

export const metadata: Metadata = {
	title: "QTMA | Website Refresh",
	description:
		"The 2026 website refresh for Queen's Technology & Media Association.",
	icons: {
		icon: "/favicon.ico",
	},
};

type RootLayoutProps = Readonly<{
	children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
