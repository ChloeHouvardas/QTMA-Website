import Layout from "./layout";
import { QtmaLogo } from "./icons/QtmaLogo";

export default function Footer() {
	return (
		<Layout>
			<div className="flex flex-col justify-center items-center">
				<QtmaLogo className="w-32 h-auto opacity-90" />
				<a
					href="https://instagram.com/queenstechmedia"
					target="_blank"
					rel="noopener noreferrer"
					className="text-gray-400 text-sm hover:text-qtmaPrimaryBlue transition-colors mb-6"
				>
					@queenstechmedia
				</a>
			</div>
		</Layout>
	);
}
