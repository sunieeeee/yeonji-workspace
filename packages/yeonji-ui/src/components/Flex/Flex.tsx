import { forwardRef, type ReactNode } from "react";
import type { BaseProps } from "../../types/base.types";
import { primitive } from "../../theme";
import { root } from "./Flex.css";
import { RecipeVariants } from "@vanilla-extract/recipes";
import clsx from "clsx";

export type FlexProps = BaseProps &
	RecipeVariants<typeof root> & {
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
				className={clsx(
					root({ flexDirection, alignItems, justifyContent, gap }),
					className,
				)}
				style={sx}
			>
				{children}
			</div>
		);
	},
);

Flex.displayName = "Flex";

export { Flex };
export default Flex;
