type TeamNode = {
	children?: TeamNode[];
	subtitle: string;
	title: string;
};

const teamStructure: TeamNode = {
	children: [
		{
			children: [
				{ subtitle: "Junior", title: "Business Analyst" },
				{ subtitle: "Junior", title: "Business Analyst" },
			],
			subtitle: "Senior",
			title: "Business Analyst",
		},
		{
			children: [
				{ subtitle: "Junior", title: "Developer" },
				{ subtitle: "Junior", title: "Developer" },
				{ subtitle: "Junior", title: "Developer" },
			],
			subtitle: "Senior",
			title: "Developer",
		},
		{
			children: [
				{ subtitle: "Junior", title: "UI/UX Designer" },
				{ subtitle: "Junior", title: "UI/UX Designer" },
			],
			subtitle: "Senior",
			title: "UI/UX Designer",
		},
	],
	subtitle: "Coordinates • Plans • Ships",
	title: "Product Manager",
};

function TeamNodeCard({ node, tier }: { node: TeamNode; tier: 1 | 2 | 3 }) {
	if (tier === 1) {
		return (
			<div className="w-40 rounded-xl bg-qtmaBlue px-4 py-3 text-center shadow-qtma sm:w-48 sm:px-6 sm:py-4">
				<p className="m-0 text-sm font-bold leading-tight text-white sm:text-base">
					{node.title}
				</p>
				<p className="mb-0 mt-1 text-xs font-light leading-tight text-white/70 sm:text-sm">
					{node.subtitle}
				</p>
			</div>
		);
	}

	return (
		<div
			className={`rounded-xl border-2 border-qtmaBlue bg-white px-3 py-2 text-center ${
				tier === 2
					? "flex min-h-[92px] w-32 flex-col items-center justify-center sm:min-h-[104px] sm:w-40 sm:px-4 sm:py-3"
					: "w-24 sm:w-28"
			}`}
		>
			<p
				className={`m-0 font-bold leading-tight text-qtmaBlue ${
					tier === 2 ? "text-sm sm:text-base" : "text-xs sm:text-sm"
				}`}
			>
				{node.title}
			</p>
			<p className="mb-0 mt-1 text-xs font-light leading-tight text-qtmaMuted">
				{node.subtitle}
			</p>
		</div>
	);
}

// Tier-3 nodes render at a fixed width/gap (matches the w-28/gap-3 classes
// used for the leaf row at sm+, and the w-24/gap-3 classes used below sm),
// so connector stubs can be computed to land exactly on each leaf's center
// instead of assuming the leaves are evenly spread across the full column.
const LEAF_WIDTH_PX = 112;
const LEAF_GAP_PX = 12;
const MOBILE_LEAF_WIDTH_PX = 96;
const MOBILE_LEAF_GAP_PX = 12;

function HorizontalConnectorRow({
	childCount,
	columnCentersPx,
	compact = false,
	leafGapPx = LEAF_GAP_PX,
	leafWidthPx = LEAF_WIDTH_PX,
	rowWidthPx,
}: {
	childCount: number;
	// Precomputed pixel centers (relative to `rowWidthPx`) for children whose
	// columns aren't equal widths — e.g. branches with different leaf counts.
	// Takes precedence over `compact`/evenly-spread percentage math when
	// provided (both must be provided together).
	columnCentersPx?: number[];
	compact?: boolean;
	leafGapPx?: number;
	leafWidthPx?: number;
	rowWidthPx?: number;
}) {
	const offsets =
		columnCentersPx && rowWidthPx
			? columnCentersPx.map(
					(center) => `calc(50% + ${center - rowWidthPx / 2}px)`
				)
			: compact
				? (() => {
						const totalWidth =
							childCount * leafWidthPx + (childCount - 1) * leafGapPx;
						return Array.from({ length: childCount }, (_, index) => {
							const centerFromStart =
								index * (leafWidthPx + leafGapPx) + leafWidthPx / 2;
							return `calc(50% + ${centerFromStart - totalWidth / 2}px)`;
						});
					})()
				: Array.from(
						{ length: childCount },
						(_, index) => `${((index + 0.5) / childCount) * 100}%`
					);
	const first = offsets[0];
	const last = offsets[offsets.length - 1];

	return (
		<div aria-hidden="true" className="relative h-6 w-full sm:h-8">
			<div className="absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 bg-qtmaBlue/40 sm:h-4" />
			{childCount > 1 ? (
				<div
					className="absolute top-3 h-px bg-qtmaBlue/40 sm:top-4"
					style={{ left: first, right: `calc(100% - (${last}))` }}
				/>
			) : null}
			{offsets.map((offset, index) => (
				<div
					className="absolute top-3 h-3 w-px -translate-x-1/2 bg-qtmaBlue/40 sm:top-4 sm:h-4"
					key={index}
					style={{ left: offset }}
				/>
			))}
		</div>
	);
}

function VerticalConnectorStub() {
	return <div aria-hidden="true" className="h-6 w-px bg-qtmaBlue/40 sm:h-8" />;
}

// Branches don't all have the same number of leaves (2 vs 3), so forcing
// equal-width flex columns made the wider branch's leaf row run out of room
// and wrap — breaking both the fan-out connector's pixel math and the
// column heights. Instead, size each branch column to exactly what its own
// leaf row needs, lay them out with a fixed gap, and compute the top
// connector's centers from those real widths instead of assuming thirds.
const BRANCH_GAP_PX = 48;

function getLeafRowWidth(childCount: number) {
	return childCount * LEAF_WIDTH_PX + (childCount - 1) * LEAF_GAP_PX;
}

function DesktopChart() {
	const branches = teamStructure.children ?? [];
	const columnWidths = branches.map((branch) =>
		branch.children ? getLeafRowWidth(branch.children.length) : LEAF_WIDTH_PX
	);
	const rowWidthPx =
		columnWidths.reduce((sum, width) => sum + width, 0) +
		BRANCH_GAP_PX * (branches.length - 1);
	let cursor = 0;
	const columnCentersPx = columnWidths.map((width) => {
		const center = cursor + width / 2;
		cursor += width + BRANCH_GAP_PX;
		return center;
	});

	return (
		<div
			aria-hidden="true"
			className="hidden xl:flex xl:flex-col xl:items-center"
		>
			<TeamNodeCard node={teamStructure} tier={1} />
			<HorizontalConnectorRow
				childCount={branches.length}
				columnCentersPx={columnCentersPx}
				rowWidthPx={rowWidthPx}
			/>
			<div
				className="flex items-start"
				style={{ gap: `${BRANCH_GAP_PX}px`, width: `${rowWidthPx}px` }}
			>
				{branches.map((branch, index) => (
					<div
						className="flex flex-col items-center"
						key={branch.title}
						style={{ width: `${columnWidths[index]}px` }}
					>
						<TeamNodeCard node={branch} tier={2} />
						{branch.children ? (
							<>
								<HorizontalConnectorRow
									childCount={branch.children.length}
									compact
								/>
								<div className="flex items-start justify-center gap-3">
									{branch.children.map((child, index) => (
										<TeamNodeCard key={index} node={child} tier={3} />
									))}
								</div>
							</>
						) : null}
					</div>
				))}
			</div>
		</div>
	);
}

function MobileChart() {
	const branches = teamStructure.children ?? [];

	return (
		<div aria-hidden="true" className="flex flex-col items-center xl:hidden">
			<TeamNodeCard node={teamStructure} tier={1} />
			{branches.map((branch) => (
				<div className="flex flex-col items-center" key={branch.title}>
					<VerticalConnectorStub />
					<TeamNodeCard node={branch} tier={2} />
					{branch.children ? (
						<>
							<HorizontalConnectorRow
								childCount={branch.children.length}
								compact
								leafGapPx={MOBILE_LEAF_GAP_PX}
								leafWidthPx={MOBILE_LEAF_WIDTH_PX}
							/>
							<div className="flex flex-wrap items-start justify-center gap-3">
								{branch.children.map((child, index) => (
									<TeamNodeCard key={index} node={child} tier={3} />
								))}
							</div>
						</>
					) : null}
				</div>
			))}
		</div>
	);
}

function AccessibleSummary() {
	const branches = teamStructure.children ?? [];

	return (
		<ul className="sr-only">
			<li>
				{teamStructure.title} — {teamStructure.subtitle}
				<ul>
					{branches.map((branch) => (
						<li key={branch.title}>
							{branch.title} ({branch.subtitle})
							{branch.children ? (
								<ul>
									{branch.children.map((child, index) => (
										<li key={index}>
											{child.title} ({child.subtitle})
										</li>
									))}
								</ul>
							) : null}
						</li>
					))}
				</ul>
			</li>
		</ul>
	);
}

export function TeamStructureChart() {
	return (
		<div className="mt-12 sm:mt-16">
			<AccessibleSummary />
			<DesktopChart />
			<MobileChart />
		</div>
	);
}
