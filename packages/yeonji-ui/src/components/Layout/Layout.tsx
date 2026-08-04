import Box, { type BoxProps } from "../box";

export type LayoutProps = BoxProps;

const Layout = (props: LayoutProps) => {
	return <Box {...props}>{props.children}</Box>;
};

export { Layout };
export default Layout;
