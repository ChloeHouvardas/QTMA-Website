import Layout from "../../components/layout";
import Image from "next/image";
import Nav from "../Nav";
import Head from "next/head";
import Footer from "../../components/Footer";
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

			<div className="mx-auto w-full max-w-[2400px] px-12 sm:px-16 lg:px-20 mt-60">
				<h1 className="text-qtmaPrimaryDark text-center text-4xl font-semibold mb-8">
					Meet the Team
				</h1>
				<div className="flex justify-center gap-20 mb-20">
					<LinkBox
						message="Product Managers"
						className="hover:scale-105 transition-transform duration-300"
						link="#product-manager"
					/>
					<LinkBox
						message="Developers"
						className="hover:scale-105 transition-transform duration-300"
						link="#developer"
					/>
					<LinkBox
						message="Business Analysts"
						className="hover:scale-105 transition-transform duration-300"
						link="#business-analyst"
					/>
					<LinkBox
						message="UIUX Designers"
						className="hover:scale-105 transition-transform duration-300"
						link="#ui/ux-designer"
					/>
				</div>

				{Positions.map((role) => {
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
			<Footer />
		</>
	);
};

export default Team;
