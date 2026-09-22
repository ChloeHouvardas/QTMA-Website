import Image from "next/image";
import { Instagram, Linkedin, Mail } from "lucide-react";

const instagramUrl = "https://www.instagram.com/queenstechmedia/?hl=en";
const linkedInUrl = "https://www.linkedin.com/company/qtma/posts/?feedView=all";
const emailUrl = "mailto:queenstechandmedia@gmail.com";

export function Footer() {
	return (
		<footer className="bg-white pt-2 text-white">
			<div className="min-h-[108px] rounded-t-[64px] bg-[#3960ce] sm:min-h-[136px] sm:rounded-t-[88px]">
				<div className="mx-auto flex min-h-[108px] w-full max-w-[1194px] items-center justify-between px-6 sm:min-h-[136px] sm:px-10 xl:px-0">
					<a href="#top" aria-label="QTMA home">
						<Image
							alt="QTMA"
							className="h-auto w-[120px] brightness-0 invert sm:w-[180px]"
							height={67}
							src="/assets/Visuals/QTMALogo.png"
							width={246}
						/>
					</a>

					<nav
						aria-label="QTMA social links"
						className="flex items-center gap-3 sm:gap-5"
					>
						<a
							aria-label="QTMA on Instagram"
							className="flex h-[30px] w-[30px] items-center justify-center transition-opacity hover:opacity-75 sm:h-10 sm:w-10 [&_svg]:h-full [&_svg]:w-full"
							href={instagramUrl}
							rel="noreferrer"
							target="_blank"
						>
							<Instagram aria-hidden="true" strokeWidth={2} />
						</a>
						<a
							aria-label="QTMA on LinkedIn"
							className="flex h-[30px] w-[30px] items-center justify-center transition-opacity hover:opacity-75 sm:h-10 sm:w-10 [&_svg]:h-full [&_svg]:w-full"
							href={linkedInUrl}
							rel="noreferrer"
							target="_blank"
						>
							<Linkedin aria-hidden="true" strokeWidth={2} />
						</a>
						<a
							aria-label="Email QTMA"
							className="flex h-[30px] w-[30px] items-center justify-center transition-opacity hover:opacity-75 sm:h-10 sm:w-10 [&_svg]:h-full [&_svg]:w-full"
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
