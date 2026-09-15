import { Header } from "@/components/Header";
import PortfolioSection from "@/components/team/PortfolioSection";
import { teamPortfolios } from "@/data/team-content";

export default function TeamPage() {
	return (
		<div id="top">
			<Header />
			<main>
				<section className="mx-auto w-full max-w-[1296px] px-5 pt-20 text-center sm:pt-24">
					<h1 className="text-5xl font-semibold text-qtmaBlue sm:text-7xl">
						Our Team
					</h1>
					<p className="mt-4 text-xl font-light text-gray-400 sm:text-2xl">
						Meet the next generation of leaders and innovators
					</p>
				</section>
				<PortfolioSection {...teamPortfolios[0]} />
				<div className="mx-auto mt-20 w-full max-w-[1100px] space-y-20 px-6 pb-24 sm:px-8 md:mt-24 md:space-y-28 md:pb-32">
					{teamPortfolios.slice(1).map((portfolio) => (
						<PortfolioSection key={portfolio.id} {...portfolio} />
					))}
				</div>
			</main>
		</div>
	);
}
