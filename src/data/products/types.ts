export type ProductMember = {
	name: string;
	role: string;
	linkedinUrl?: string;
};

export type ProductImage = {
	src: string;
	alt: string;
};

export type Product = {
	name: string;
	slug: string;
	year: string;
	slogan: string;
	logo: string;
	pitch?: string;
	heroImage?: ProductImage;
	teamPhoto?: ProductImage;
	overview?: string;
	overviewHeading?: string;
	members?: ProductMember[];
};
