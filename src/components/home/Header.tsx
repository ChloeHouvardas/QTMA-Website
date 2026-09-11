"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
	{ href: "#top", label: "Home" },
	{ href: "#products", label: "Products" },
	{ href: "/team", label: "Team" },
	{ href: "/about", label: "About" },
	{ href: "#contact", label: "Contact" },
];

export function Header() {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const closeOnEscape = (event: KeyboardEvent) => {
			if (event.key === "Escape") setOpen(false);
		};
		window.addEventListener("keydown", closeOnEscape);
		return () => window.removeEventListener("keydown", closeOnEscape);
	}, []);

	return (
		<header className="header">
			<div className="site-container header__inner">
				<a className="header__logo" href="#top" aria-label="QTMA home">
					<Image
						alt="QTMA"
						height={130}
						priority
						src="/assets/figma/header-logo-2.png"
						width={480}
					/>
				</a>

				<nav className="header__desktop-nav" aria-label="Main navigation">
					{links.map((link) => (
						<Link href={link.href} key={link.href}>
							{link.label}
						</Link>
					))}
				</nav>

				<button
					aria-controls="mobile-navigation"
					aria-expanded={open}
					aria-label={open ? "Close navigation menu" : "Open navigation menu"}
					className="header__menu-button"
					onClick={() => setOpen((current) => !current)}
					type="button"
				>
					{open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
				</button>
			</div>

			<nav
				aria-label="Mobile navigation"
				className={`header__mobile-nav${open ? " is-open" : ""}`}
				id="mobile-navigation"
			>
				<div className="site-container">
					{links.map((link) => (
						<Link
							href={link.href}
							key={link.href}
							onClick={() => setOpen(false)}
						>
							{link.label}
						</Link>
					))}
				</div>
			</nav>
		</header>
	);
}
