import Head from "next/head";
import Layout from "../components/layout";
import Home from "./Home";
import Footer from "../components/Footer";

export async function getStaticProps({ params }) {
	return {
		props: {},
	};
}

// Top-level component which renders the homepage
export default function Main() {
	return (
		<>
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<meta
					name="google-site-verification"
					content="OBns1OJgPEnUS6kxBHuLtfYJJe_YB8BAInF6h1rjfTo"
				/>
				<meta
					name="description"
					content="QTMA hires 12 Developers, 4 Product Manager, 4 Designers, 8 Business Analysts to complete our product teams. We also hire various operating roles. Applications include a written application and interview with the incoming Co - Chairs."
				/>
				<link rel="icon" href="/favicon.ico" sizes="any" />
				<link rel="icon" type="image/png" href="/assets/Club%20Data/QTMA_logo.png" />
				<link rel="apple-touch-icon" href="/assets/Club%20Data/QTMA_logo.png" />
				<title>QTMA</title>
				<meta name="og:title" content={"QTMA"} />
			</Head>
			<Layout>
				<div className="index-container">
					<Home />
					<Footer />
				</div>
			</Layout>
		</>
	);
}
