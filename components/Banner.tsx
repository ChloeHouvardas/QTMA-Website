import { LinkBox } from "./LinkBox";
import Image from "next/image";

type BannerProps = {
	title: string;
	message: string;
	linkBox: React.ReactNode;
	images?: string[];
};

export function Banner({ title, message, linkBox, images = [] }: BannerProps) {
	const renderImages = () => {
		if (images.length === 2) {
			return (
				<div className="relative w-[280px] h-[340px]">
					<Image
						src={images[0]}
						alt="top-right"
						width={260}
						height={260}
						className="absolute top-0 right-0 rounded-lg shadow"
					/>
					<Image
						src={images[1]}
						alt="below-top-right"
						width={240}
						height={240}
						className="absolute bottom-0 right-20 transform  rounded-lg shadow"
					/>
				</div>
			);
		} else if (images.length === 3) {
			return (
				<div className="relative w-[280px] h-[280px]">
					<Image
						src={images[2]} // nathan
						alt="top"
						width={170}
						height={170}
						className="absolute top-0 right-10 transform -translate-x-1/2 rounded-lg shadow"
					/>
					<Image
						src={images[1]} // alison
						alt="bottom-right"
						width={90}
						height={90}
						className="absolute bottom-0 right-0 rounded-lg shadow"
					/>
					<Image
						src={images[0]} // mahir
						alt="left"
						width={250}
						height={250}
						className="absolute bottom-0 right-40 rounded-lg shadow"
					/>
				</div>
			);
		}
		return null;
	};

	return (
		<div className="bg-blue-100 border-4 border-blue-600 rounded-3xl py-8 px-4 mx-16 sm:px-6 lg:px-8 mb-16">
			<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
				<div className="text-left max-w-[600px]">
					<h1 className="text-blue-600 text-3xl sm:text-4xl mb-4">
						{title}
					</h1>
					<p className="text-gray-400 text-lg sm:text-xl mb-6">
						{message}
					</p>
					{linkBox}
				</div>
				{renderImages()}
			</div>
		</div>
	);
}
