type FlexProps = {
	flexDirection?: "row" | "column";
	alignItems?: "flex-start" | "center" | "flex-end";
	justifyContent?: "flex-start" | "center" | "flex-end" | "space-between";
	gap?: string;
	className?: string;
	sx?: React.CSSProperties;
	children: React.ReactNode;
};

const Flex = ({
	flexDirection,
	alignItems,
	justifyContent,
	gap,
	className,
	sx,
	children,
}: FlexProps) => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection,
				alignItems,
				justifyContent,
				gap,
				...sx,
			}}
			className={className}
		>
			{children}
		</div>
	);
};

export { Flex };
export default Flex;
