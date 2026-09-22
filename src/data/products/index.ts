import { products2019To2020 } from "./2019-2020";
import { products2020To2021 } from "./2020-2021";
import { products2021To2022 } from "./2021-2022";
import { products2022To2023 } from "./2022-2023";
import { products2023To2024 } from "./2023-2024";
import { products2024To2025 } from "./2024-2025";
import { products2025To2026 } from "./2025-2026";
import type { Product } from "./types";

export type { Product, ProductImage, ProductMember } from "./types";

export const productYears = [
	"2025-2026",
	"2024-2025",
	"2023-2024",
	"2022-2023",
	"2021-2022",
	"2020-2021",
	"2019-2020",
] as const;

export const archiveProducts: Product[] = [
	...products2025To2026,
	...products2024To2025,
	...products2023To2024,
	...products2022To2023,
	...products2021To2022,
	...products2020To2021,
	...products2019To2020,
];

export function getProduct(year: string, slug: string) {
	return archiveProducts.find(
		(product) => product.year === year && product.slug === slug
	);
}
