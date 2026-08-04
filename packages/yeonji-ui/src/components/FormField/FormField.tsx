import React, { useId } from "react";
import { Label } from "../Label";
import { BaseProps } from "../../types/base.types";
import styles from "./FormField.module.css";

type FormFieldProps = BaseProps & {
	id: string;
	label: string;
	errorText?: string;
	required?: boolean;
	disabled?: boolean;
	invalid?: boolean;
	fullWidth?: boolean;
	size?: "sm" | "md" | "lg";
	layout?: "vertical" | "horizontal";
	labelSx?: React.CSSProperties;
	children?: React.ReactNode;
};

const FormField = ({
	id,
	label,
	errorText,
	required,
	disabled,
	invalid,
	fullWidth,
	size,
	layout,
	className,
	sx,
	labelSx,
	children,
}: FormFieldProps) => {
	const controlId = id ?? `yj-field-${useId().replace(/:/g, "")}`;
	return (
		<div
			data-size={size}
			data-layout={layout}
			data-disabled={disabled}
			data-invalid={invalid}
			data-full-width={fullWidth}
			className={`${styles.root}${className ? ` ${className}` : ""}`}
			style={{ ...sx }}
			aria-disabled={disabled}
			aria-invalid={invalid}
			aria-required={required}
			aria-describedby={errorText ? `${controlId}-error` : undefined}
			aria-labelledby={label ? `${controlId}-label` : undefined}
			aria-controls={controlId}
		>
			{label && (
				<Label
					id={`${controlId}-label`}
					htmlFor={controlId}
					label={label}
					required={required}
					className={styles.label}
					sx={labelSx}
				/>
			)}
			<div className={styles.control}>
				{children}
				{errorText && (
					<div
						id={`${controlId}-error`}
						data-error={invalid}
						className={styles.errorText}
					>
						{errorText}
					</div>
				)}
			</div>
		</div>
	);
};

export { FormField };
export default FormField;
