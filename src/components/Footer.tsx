import Image from "next/image";
import { Instagram, Linkedin, Mail } from "lucide-react";

const instagramUrl = "https://www.instagram.com/queenstechmedia/?hl=en";
const linkedInUrl = "https://www.linkedin.com/company/qtma/posts/?feedView=all";
const emailUrl = "mailto:queenstechandmedia@gmail.com";

export function Footer() {
	return (
		<footer className="bg-white pt-2 text-white">
			<div className="rounded-t-3xl bg-[#3960ce]">
				<div className="mx-auto flex min-h-20 w-full max-w-[1194px] items-center justify-between px-6 sm:min-h-24 sm:px-10 xl:px-0">
					<a
						aria-label="QTMA home"
						className="flex h-11 items-center"
						href="#top"
					>
						<Image
							alt="QTMA"
							className="h-auto w-20 brightness-0 invert"
							height={67}
							src="/assets/Visuals/QTMALogo.png"
							width={246}
						/>
					</a>

					<nav
						aria-label="QTMA social links"
						className="flex items-center gap-1 sm:gap-3"
					>
						<a
							aria-label="QTMA on Instagram"
							className="flex h-11 w-11 items-center justify-center transition-opacity hover:opacity-75 [&_svg]:h-6 [&_svg]:w-6"
							href={instagramUrl}
							rel="noreferrer"
							target="_blank"
						>
							<Instagram aria-hidden="true" strokeWidth={2} />
						</a>
						<a
							aria-label="QTMA on LinkedIn"
							className="flex h-11 w-11 items-center justify-center transition-opacity hover:opacity-75 [&_svg]:h-6 [&_svg]:w-6"
							href={linkedInUrl}
							rel="noreferrer"
							target="_blank"
						>
							<Linkedin aria-hidden="true" strokeWidth={2} />
						</a>
						<a
							aria-label="Email QTMA"
							className="flex h-11 w-11 items-center justify-center transition-opacity hover:opacity-75 [&_svg]:h-6 [&_svg]:w-6"
							href={emailUrl}
						>
							<Mail aria-hidden="true" strokeWidth={2} />
						</a>
					</nav>
				</div>
			</div>
		</footer>
	);
}
