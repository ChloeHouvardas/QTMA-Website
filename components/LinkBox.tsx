import { SparkIcon } from "./icons/SparkIcon";

const sizeMap = {
	small: "sm",
	medium: "md",
	large: "lg",
} as const;

type Size = keyof typeof sizeMap;

const paddingBySize: Record<"sm" | "md" | "lg", string> = {
	sm: "px-4 py-2 text-sm",
	md: "px-6 py-3 text-base",
	lg: "px-8 py-4 text-lg",
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
			className={`text-gray-800 bg-transparent border-2 border-gray-800 rounded-full shadow-sm inline-flex items-center gap-3 no-underline hover:bg-gray-50 hover:cursor-pointer transition-colors duration-500 ease-in-out ${twSize} ${className}`}
		>
			{hasIcon && <span className="shrink-0">{icon ?? defaultIcon}</span>}
			<span className="uppercase tracking-wide">{message}</span>
		</a>
	);
}
