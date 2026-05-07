import React, { forwardRef } from "react";
import styles from "./Input.module.css";
import type { BaseProps } from "../../types/base.types";
import type { ComponentPropsWithoutRef } from "react";

type InputOwnProps = BaseProps & {
	size?: "sm" | "md" | "lg";
	type?: "text" | "password" | "email" | "number";
	placeholder?: string;
	value?: string;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export type InputProps = InputOwnProps &
	Omit<ComponentPropsWithoutRef<"input">, keyof InputOwnProps>;

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
	{ size = "md", type = "text", placeholder, value, onChange, ...props },
	ref,
) {
	return (
		<div className={styles.root} data-size={size}>
			<input
				ref={ref}
				className={styles.field}
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				{...props}
			/>
		</div>
	);
});

export { Input };
export default Input;
