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
				tier === 2 ? "w-32 sm:w-40 sm:px-4 sm:py-3" : "w-24 sm:w-28"
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
// used for the leaf row below sm+, the only breakpoint this row appears at),
// so connector stubs can be computed to land exactly on each leaf's center
// instead of assuming the leaves are evenly spread across the full column.
const LEAF_WIDTH_PX = 112;
const LEAF_GAP_PX = 12;

function HorizontalConnectorRow({
	childCount,
	compact = false,
}: {
	childCount: number;
	compact?: boolean;
}) {
	const offsets = compact
		? (() => {
				const totalWidth =
					childCount * LEAF_WIDTH_PX + (childCount - 1) * LEAF_GAP_PX;
				return Array.from({ length: childCount }, (_, index) => {
					const centerFromStart =
						index * (LEAF_WIDTH_PX + LEAF_GAP_PX) + LEAF_WIDTH_PX / 2;
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

function DesktopChart() {
	const branches = teamStructure.children ?? [];

	return (
		<div
			aria-hidden="true"
			className="hidden sm:flex sm:flex-col sm:items-center"
		>
			<TeamNodeCard node={teamStructure} tier={1} />
			<HorizontalConnectorRow childCount={branches.length} />
			<div className="flex w-full items-start justify-between gap-4">
				{branches.map((branch) => (
					<div
						className="flex min-w-0 flex-1 flex-col items-center"
						key={branch.title}
					>
						<TeamNodeCard node={branch} tier={2} />
						{branch.children ? (
							<>
								<HorizontalConnectorRow
									childCount={branch.children.length}
									compact
								/>
								<div className="flex flex-wrap items-start justify-center gap-2 sm:gap-3">
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
		<div aria-hidden="true" className="flex flex-col items-center sm:hidden">
			<TeamNodeCard node={teamStructure} tier={1} />
			<div className="flex flex-col items-center gap-8">
				{branches.map((branch) => (
					<div className="flex flex-col items-center" key={branch.title}>
						<VerticalConnectorStub />
						<TeamNodeCard node={branch} tier={2} />
						{branch.children ? (
							<>
								<VerticalConnectorStub />
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
