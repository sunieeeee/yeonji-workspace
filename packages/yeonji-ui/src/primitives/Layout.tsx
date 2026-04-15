import Box from "./Box";
import type { BoxProps } from "./Box";
import type { BaseProps } from "../types/base.types";

type LayoutProps = BoxProps & BaseProps;

const Layout = (props: LayoutProps) => {
	return <Box {...props}>{props.children}</Box>;
};

export default Layout;
