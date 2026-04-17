import React from "react";
import styles from "./Input.module.css";
import type { BaseProps } from "../../types/base.types";
import type { ComponentPropsWithoutRef } from "react";

type InputOwnProps = BaseProps & {
	size?: "sm" | "md" | "lg";
	type?: "text" | "password" | "email" | "number";
};

export type InputProps = InputOwnProps &
	Omit<ComponentPropsWithoutRef<"input">, keyof InputOwnProps>;

const Input = ({ size = "md", type = "text", ...props }: InputProps) => {
	return (
		<div className={styles.root} data-size={size}>
			<input className={styles.field} type={type} {...props} />
		</div>
	);
};

export { Input };
export default Input;
