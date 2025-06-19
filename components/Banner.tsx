import { LinkBox } from "./LinkBox";
type BannerProps = {
	title: string;
	message: string;
	linkBox: React.ReactNode;
};

export function Banner({ title, message, linkBox }: BannerProps) {
	return (
		<div className="bg-blue-100 border-4 border-blue-600 rounded-3xl py-8 px-4 mx-16 sm:px-6 lg:px-8">
			<div className="max-w-3xl mx-auto text-center">
				<h1 className="text-blue-600 text-3xl sm:text-4xl mb-4">
					{title}
				</h1>
				<p className="text-gray-400 text-lg sm:text-xl mb-6">
					{message}
				</p>
				{linkBox}
			</div>
		</div>
	);
}
