import { SparkIcon } from "./icons/SparkIcon";

const sizeMap = {
	small: "sm",
	medium: "md",
	large: "lg",
} as const;

type Size = keyof typeof sizeMap;

const paddingBySize: Record<"sm" | "md" | "lg", string> = {
	sm: "p-2 text-sm",
	md: "p-4 text-base",
	lg: "p-6 text-lg",
};

type LinkBoxProps = {
	message: string;
	link: string;
	icon?: React.ReactNode;
	hasIcon?: boolean;
	size?: Size;
	className?: string;
};

export function LinkBox({
	message,
	link,
	icon,
	hasIcon = false,
	size = "medium",
	className = "",
}: LinkBoxProps) {
	const twSize = paddingBySize[sizeMap[size]];
	const defaultIcon = <SparkIcon />;

	return (
		<a
			href={link}
			className={`text-qtmaPrimaryDark bg-white border-2 border-qtmaPrimaryDark rounded-full shadow-md inline-flex items-center gap-2 no-underline hover:bg-gray-100 hover:cursor-pointer transition ${twSize} ${className}`}
		>
			{hasIcon && <span className="shrink-0">{icon ?? defaultIcon}</span>}
			<span>{message}</span>
		</a>
	);
}
