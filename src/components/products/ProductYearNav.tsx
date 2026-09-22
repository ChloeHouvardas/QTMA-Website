import { productYears } from "@/data/products";

type ProductYearNavProps = {
	selectedYear: string;
	onYearChange: (year: string) => void;
};

export default function ProductYearNav({
	selectedYear,
	onYearChange,
}: ProductYearNavProps) {
	return (
		<nav
			aria-label="Product archive years"
			className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:gap-3 lg:overflow-visible lg:pb-0"
		>
			{productYears.map((year) => {
				const isSelected = year === selectedYear;

				return (
					<button
						aria-pressed={isSelected}
						className={`shrink-0 rounded-full px-3 py-2 text-left text-xs transition-colors ${
							isSelected
								? "bg-[#f2f2f2] text-[#606060]"
								: "text-[#a4a4a4] hover:bg-[#f7f7f7] hover:text-[#606060]"
						}`}
						key={year}
						onClick={() => onYearChange(year)}
						type="button"
					>
						{year}
					</button>
				);
			})}
		</nav>
	);
}
