import { forwardRef, type ReactNode } from "react";
import type { BaseProps } from "../../types/base.types";

export type FlexProps = BaseProps & {
	flexDirection?: "row" | "column";
	alignItems?: "flex-start" | "center" | "flex-end";
	justifyContent?: "flex-start" | "center" | "flex-end" | "space-between";
	gap?: string;
	children: ReactNode;
};

const Flex = forwardRef<HTMLDivElement, FlexProps>(
	(
		{ flexDirection, alignItems, justifyContent, gap, className, sx, children },
		ref,
	) => {
		return (
			<div
				ref={ref}
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
	},
);

Flex.displayName = "Flex";

export { Flex };
export default Flex;
