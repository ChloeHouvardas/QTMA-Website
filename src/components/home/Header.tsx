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
		<header className="sticky top-0 z-30 bg-white shadow-[0_2.18px_6.55px_rgba(0,0,0,0.25)]">
			<div className="relative mx-auto flex h-14 w-full max-w-[calc(1250px+(2*clamp(20px,4vw,48px)))] items-center px-[25px] md:px-[clamp(20px,4vw,48px)]">
				<a className="block leading-none" href="#top" aria-label="QTMA home">
					<Image
						alt="QTMA"
						className="h-auto w-[79.37px]"
						height={130}
						priority
						src="/assets/figma/header-logo-2.png"
						width={480}
					/>
				</a>

				<nav
					className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-[74px] whitespace-nowrap text-base font-light uppercase md:flex"
					aria-label="Main navigation"
				>
					{links.map((link) => (
						<Link
							className="relative py-2 text-[#999999] opacity-50 transition after:absolute after:bottom-[3px] after:left-0 after:h-[1.5px] after:w-full after:origin-right after:scale-x-0 after:bg-qtmaBlue after:transition-transform hover:text-qtmaBlue hover:opacity-100 hover:after:origin-left hover:after:scale-x-100 focus-visible:text-qtmaBlue focus-visible:opacity-100 focus-visible:after:origin-left focus-visible:after:scale-x-100"
							href={link.href}
							key={link.href}
						>
							{link.label}
						</Link>
					))}
				</nav>

				<button
					aria-controls="mobile-navigation"
					aria-expanded={open}
					aria-label={open ? "Close navigation menu" : "Open navigation menu"}
					className="ml-auto flex h-11 w-11 items-center justify-center border-0 bg-transparent p-0 text-qtmaInk md:hidden [&_svg]:h-[25px] [&_svg]:w-[25px]"
					onClick={() => setOpen((current) => !current)}
					type="button"
				>
					{open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
				</button>
			</div>

			<nav
				aria-label="Mobile navigation"
				className={`absolute top-14 grid w-full overflow-hidden border-t border-qtmaBorder bg-white transition-[grid-template-rows] duration-200 md:hidden ${
					open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
				}`}
				id="mobile-navigation"
			>
				<div className="mx-auto flex min-h-0 w-full max-w-[calc(1250px+(2*20px))] flex-col overflow-hidden px-5">
					{links.map((link) => (
						<Link
							className="border-b border-qtmaBorder py-[18px] text-[1.05rem] font-medium"
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
