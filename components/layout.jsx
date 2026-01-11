import Head from "next/head";

export default function Layout({ children, background, home, isNav }) {
	return (
		<>
			<Head></Head>
			<div className={`layout-container ${isNav ? "nav-layout" : ""}`}>
				<main
					className="w-full overflow-x-hidden"
					style={{ backgroundColor: background }}
				>
					{children}
				</main>
			</div>
		</>
	);
}
