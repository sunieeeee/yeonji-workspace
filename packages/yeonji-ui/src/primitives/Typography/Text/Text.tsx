import type { ReactNode } from "react";
import type { BaseProps } from "../../../types/base.types";

export type TextProps = BaseProps & {
	children?: ReactNode;
	strong?: boolean;
};

const Text = ({ children, className, strong, sx }: TextProps) => {
	if (strong) {
		return (
			<strong style={sx} className={className}>
				{children}
			</strong>
		);
	}

	return (
		<p style={sx} className={className}>
			{children}
		</p>
	);
};

export { Text };
export default Text;
