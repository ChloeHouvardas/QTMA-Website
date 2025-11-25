import Layout from "../../components/layout";
import Image from "next/image";
import Nav from "../Nav";
import Link from "next/link";
import Head from "next/head";
import productData from "../../data/ProductsData";
import Footer from "../../components/Footer";
import FloatingBlobsStill from "../../components/FloatingBlobsStill";
import { useState, useEffect } from "react";

const getLogo = (name, year) => `/assets/Products/${year}/${name}_Logo.png`;

export default function Products() {
	// Get unique years from product data and sort them in descending order
	const years = [...new Set(productData.map(product => product.year))].sort((a, b) => b.localeCompare(a));
	const [selectedYear, setSelectedYear] = useState(years[0]);

	const renderYear = (year) => {
		const products = productData.filter(product => product.year === year);
		return <>
            <div className="products-container2">
				{products.map(product => {
					const name = product.productName;
					const isWinterWinner = name === 'Nucleus' || name === 'Dilliad' || name === 'Kartt';
					const isFallWinner = name === 'Pantree' || name === 'Fujiplans';

					return (
                        <Link passHref href={`/product/${name}`} legacyBehavior>
                            <div className={`product2 ${isWinterWinner ? 'winner-product' : ''} ${isFallWinner ? 'fall-winner-product' : ''}`}>
                                {isWinterWinner && (
                                    <div className="winner-badge">
                                        <span className="winner-icon">🏆</span>
                                        <span className="winner-text">Winter Demo Day Winner</span>
                                    </div>
                                )}
                                {isFallWinner && (
                                    <div className="fall-winner-badge">
                                        <span className="winner-icon">🏆</span>
                                        <span className="winner-text">Fall Demo Day Winner</span>
                                    </div>
                                )}
                                <div className="product-info2">
                                    <h3>{name}</h3>
                                    <p><i>'{product.slogan}'</i></p>
                                </div>
                                <Image alt="Product Logo" src={product.logo} width={product.logoWidth}
                                       height={product.logoHeight}/>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </>;
	}

	return (
		<>
			<Head>
				<meta
					name="description"
				/>
				<title>QTMA</title>
				<meta name="og:title" content={"QTMA"}/>
			</Head>
			<Nav/>
			<Layout
				background="linear-gradient(135deg, #e3edfa 0%, #f3f4fa 100%)"
				metaInfo={
					"Designers. Developers. Analysts. Building at Canada's premier product incubation club."
				}
			>
		<FloatingBlobsStill />
		<div className="mx-auto w-full max-w-[2400px] px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-4 max-[650px]:mt-[var(--nav-height-sm,80px)] relative z-10">
			<h1 className="text-[#3576d3] text-center text-3xl sm:text-4xl font-medium mb-6 sm:mb-8">
				Products
			</h1>

			{/* Year Filter Buttons */}
			<div className="flex flex-wrap justify-center gap-3 mb-12">
				{years.map(year => (
					<button
						key={year}
						onClick={() => setSelectedYear(year)}
						className={`px-6 py-3 rounded-full uppercase tracking-wide font-medium transition-all duration-500 ease-in-out border-2 ${
							selectedYear === year
								? 'bg-gray-800 text-white border-gray-800'
								: 'bg-transparent text-gray-800 border-gray-800 hover:bg-gray-50'
						}`}
					>
						{year}
					</button>
				))}
			</div>

			<div id="Products" className="product-container2 product-page2 container">
				{renderYear(selectedYear)}
			</div>
		</div>
		</Layout>
		<Footer/>
		</>
	);
}

export async function getStaticProps() {
	return {
		props: {},
		revalidate: 60,
	};
}
