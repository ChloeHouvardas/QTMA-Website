import Layout from "../../components/layout";
import Nav from "../Nav";
import React, { useEffect, useState } from "react";
import productData from "../../data/ProductsData";
import Image from "next/image";
import { useRouter } from "next/router";
import Footer from "../../components/Footer";

//
// This file is used to dynamically render each product (e.g. <Link passHref href="/product/Eagle>">)
//

export const getStaticProps = async () => {
	return {props: {}};
};

export const getStaticPaths = async () => {
	return {
		paths: [
			// 2019-2020
			{params: {id: "Studii"}},
			{params: {id: "Hungover"}},
			{params: {id: "Wob"}},
			{params: {id: "Stocked"}},

			// 2020-2021
			{params: {id: "Eagle"}},
			{params: {id: "Pronto"}},
			{params: {id: "Voluntera"}},
			{params: {id: "Loop"}},

			// 2021-2022
			{params: {id: "Casa"}},
			{params: {id: "Haus"}},
			{params: {id: "Loco"}},
			{params: {id: "Soar"}},

			// 2022-2023
			{params: {id: "Feastly"}},
			{params: {id: "Kartt"}},
			{params: {id: "Sift"}},
			{params: {id: "Venato"}},
		],
		fallback: false,
	};
};

export default function Product() {
	const router = useRouter();
	const queryId = router.query.id;
	const [product, setProduct] = useState();

	useEffect(() => {
		const details = productData.filter((productObj) => productObj.productName === queryId);
		setProduct(details[0]);
	}, [queryId]);

	const renderTeamMemberName = (member) => {
		if (member.linkedin !== "#") {
			return (
				<a className="member-name"
				   href={member.linkedin}
				   target="_blank" rel="noreferrer">
					{member.studentName}<br/><small><i>{member.position}</i></small>
				</a>
			);
		}

		return (
			<div className="member-name-no-linkedin">
				{member.studentName}<br/><small><i>{member.position}</i></small>
			</div>
		);
	}

	const renderProductName = (product) => {
		if (product.link !== '') {
			return <a href={product.link} target="_blank">{product.productName}</a>;
		}
		return product.productName;
	}

	return (
		<>
			<Nav/>
			<Layout>
				{product && (
					<div className="product-container-id container">
						<div className="product-header-container">
							<h1 className="product-name">{renderProductName(product)}</h1>
							<p className="product-slogan">{product.slogan}</p>
						</div>

						<div className="team-container">
							<h2 className="team-heading">The Team</h2>
							<div className="team-names">
								{product.members.map((member) => renderTeamMemberName(member))}
							</div>

							{/* 2020-2021 was the covid year, so no team photos were taken. All other years have them */}
							{product.year !== "2020-2021" && (
								<div className="team-photo">
									<Image
										alt="team photo"
										src={product.teamPhoto}
										width={product.photoXY.width}
										height={product.photoXY.height}
									/>
								</div>
							)}
						</div>

						<div className="overview-container">
							<h2 className="overview-heading">Product Overview</h2>
							<p className="product-desc">{product.overview}</p>
						</div>

						<div className="pitch-container">
							<h2 className="pitch-heading">Product Pitch</h2>
							<iframe className="product-pdf" src={product.pitch}></iframe>
						</div>

						{product.demo !== "" && (
							<div className="demo-container">
								<h2 className="demo-heading">Product Demo</h2>
								<iframe
									className="demo-video"
									width="560"
									height="315"
									src={product.demo}
									title="YouTube video player"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								></iframe>
							</div>
						)}
					</div>
				)}
			</Layout>
			<Footer/>
		</>
	);
}
