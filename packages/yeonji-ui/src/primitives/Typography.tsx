import React from "react";
import type { BaseProps } from "../types/base.types";

type TypographyProps = BaseProps & {
	children?: React.ReactNode;
	level?: 1 | 2 | 3 | 4 | 5 | 6;
	strong?: boolean;
};

const Typography = (props: TypographyProps) => {
	const tag = `h${props.level || 1}` as keyof JSX.IntrinsicElements;

	if (props?.level) {
		return React.createElement(
			tag,
			{
				style: props.sx,
				className: props.className,
			},
			props.children,
		);
	}

	return (
		<p style={props.sx} className={props.className}>
			{props.children}
		</p>
	);
};

export { Typography };
export default Typography;
