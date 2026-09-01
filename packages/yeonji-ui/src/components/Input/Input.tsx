import React, { forwardRef } from "react";
import { fieldRoot, fieldElement } from "../../shared/field";
import type { BaseProps } from "../../types/base.types";
import type { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";

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
	{
		size = "md",
		type = "text",
		placeholder,
		value,
		onChange,
		className,
		sx,
		...props
	},
	ref,
) {
	return (
		<div className={clsx(fieldRoot({ size }), className)} style={sx}>
			<input
				ref={ref}
				className={fieldElement({ size })}
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
