import Head from "next/head";

export default function Layout({children, background, home, isNav}) {
	return (
		<>
			<Head>
				<link
					href="https://fonts.googleapis.com/css2?family=Mohave:ital,wght@0,300;1,300&family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400&display=swap"
					rel="stylesheet"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Mohave:ital,wght@0,300;1,300&family=Quicksand:wght@300;400;500;600;700&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<div className={`layout-container ${isNav ? "nav-layout" : ""}`}>
				<main className="w-full overflow-x-hidden" style={{backgroundColor: background, borderBottomRightRadius: home ? "35rem" : ""}}>
					{children}
				</main>
			</div>
		</>
	);
}
