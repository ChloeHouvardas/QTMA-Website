import Nav from "../Nav";
import Head from "next/head";
import Footer from "../../components/Footer";
import Layout from "../../components/layout";
import FloatingBlobsStill from "../../components/FloatingBlobsStill";
import { ClubMembers, Positions } from "../../data/TeamData.js";
import { TeamRoleSection } from "../../components/TeamRoleSection";
import { LinkBox } from "../../components/LinkBox";

const Team = () => {
	return (
		<>
			<Head>
				<meta name="description" content="2023/2024 Team" />
				<title>QTMA</title>
				<meta name="og:title" content={"QTMA"} />
			</Head>

		<Nav />

		<Layout
			background="linear-gradient(135deg, #e3edfa 0%, #f3f4fa 100%)"
			metaInfo={
				"Designers. Developers. Analysts. Building at Canada's premier product incubation club."
			}
		>
		<FloatingBlobsStill />
		<div className="mx-auto w-full max-w-[2400px] px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-4 max-[650px]:mt-[var(--nav-height-sm,80px)] relative z-10">
			<h1 className="text-[#3576d3] text-center text-3xl sm:text-4xl font-medium mb-6 sm:mb-8">
				Meet the Team
			</h1>
			<div className="flex flex-wrap justify-center gap-3 sm:gap-6 md:gap-12 lg:gap-20 mb-12 sm:mb-16 md:mb-20">
				<LinkBox
					message="Product Managers"
					className="hover:scale-105 transition-transform duration-300 text-sm sm:text-base"
					link="#product-manager"
				/>
				<LinkBox
					message="Developers"
					className="hover:scale-105 transition-transform duration-300 text-sm sm:text-base"
					link="#developer"
				/>
				<LinkBox
					message="Business Analysts"
					className="hover:scale-105 transition-transform duration-300 text-sm sm:text-base"
					link="#business-analyst"
				/>
				<LinkBox
					message="UIUX Designers"
					className="hover:scale-105 transition-transform duration-300 text-sm sm:text-base"
					link="#ui/ux-designer"
				/>
			</div>				{Positions.map((role) => {
					const members = ClubMembers.filter(
						(m) => m.position === role
					);
					if (members.length === 0) return null;

					return (
						<TeamRoleSection
							key={role}
							role={role}
							members={members}
						/>
					);
				})}
			</div>
		</Layout>
		<Footer />
		</>
	);
};

export default Team;
