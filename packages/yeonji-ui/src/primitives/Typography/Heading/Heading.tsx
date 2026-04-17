import type { ReactNode } from "react";
import type { BaseProps } from "../../../types/base.types";

export type HeadingProps = BaseProps & {
	children?: ReactNode;
	level?: 1 | 2 | 3 | 4 | 5 | 6;
};

const Heading = ({ children, className, level = 1, sx }: HeadingProps) => {
	const Tag = `h${level}` as keyof JSX.IntrinsicElements;

	return (
		<Tag style={sx} className={className}>
			{children}
		</Tag>
	);
};

export { Heading };
export default Heading;
