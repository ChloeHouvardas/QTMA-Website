import Layout from "../../components/layout";
import Image from "next/image";
import Nav from "../Nav";
import Link from "next/link";
import Head from "next/head";
import productData from "../../data/ProductsData";
import Footer from "../../components/Footer";

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
					content="This year, QTMA’s product teams are working on four exciting apps to tackle everyday student
            problems."
				/>
				<title>QTMA</title>
				<meta name="og:title" content={"QTMA"}/>
			</Head>
			<Nav/>
			<Layout
				background="#EDF5FC"
				metaInfo={
					"This year, QTMA’s product teams are working on four exciting apps to tackle everyday student problems."
				}
			>
				<div id="Products" className="product-container2 product-page2 container">
					<h1 className="section-title">Products</h1>
					<p className="product-subheading2">
						Over the past years, QTMA’s product teams worked on exciting apps to tackle everyday student
						problems.
					</p>

					{renderYear('2022-2023')}
					{renderYear('2021-2022')}
					{renderYear('2020-2021')}
					{renderYear('2019-2020')}
				</div>
			</Layout>
			<Footer/>
		</>
	);
}
