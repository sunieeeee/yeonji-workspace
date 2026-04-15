import {
	type ComponentPropsWithoutRef,
	type ComponentPropsWithRef,
	type ElementType,
	type Ref,
	forwardRef,
} from "react";
import type { BaseProps } from "../types/base.types";

type BoxOwnProps<T extends ElementType> = {
	as?: T;
} & BaseProps;

export type BoxProps<T extends ElementType = "div"> = BoxOwnProps<T> &
	Omit<ComponentPropsWithoutRef<T>, keyof BoxOwnProps<T>>;

type BoxRef<T extends ElementType> = Ref<ComponentPropsWithRef<T>["ref"]>;

const Box = forwardRef(function Box<T extends ElementType = "div">(
	{ as, ...props }: BoxProps<T>,
	ref: BoxRef<T>,
) {
	const Component = as || "div";

	return (
		<Component
			ref={ref}
			style={props.sx}
			className={props.className}
			{...props}
		>
			{props.children}
		</Component>
	);
});

export { Box };
export default Box;
