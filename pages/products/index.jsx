import Layout from "../../components/layout";
import Image from "next/image";
import Nav from "../Nav";
import Link from "next/link";
import Head from "next/head";
import productData from "../../data/ProductsData";
import Footer from "../../components/Footer";
import FloatingBlobsStill from "../../components/FloatingBlobsStill";

const getLogo = (name, year) => `/assets/Products/${year}/${name}_Logo.png`;

export default function Products() {

	const renderYear = (year) => {
		const products = productData.filter(product => product.year === year);
		return <>
            <p className="product-subheading2"><i>{year}:</i></p>
            <div className="products-container2">
                {products.map(product => {
                    const name = product.productName;

                    return (
                        <Link passHref href={`/product/${name}`} legacyBehavior>
                            <div className="product2">
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
			<h1 className="text-[#3576d3] text-center text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">
				Products
			</h1>
			<div id="Products" className="product-container2 product-page2 container">
				{renderYear('2024-2025')}
				{renderYear('2023-2024')}
				{renderYear('2022-2023')}
				{renderYear('2021-2022')}
				{renderYear('2020-2021')}
				{renderYear('2019-2020')}
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
