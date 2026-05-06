import React, { useId } from "react";
import { Label } from "../label";

type FormFieldProps = {
	id: string;
	label: string;
	errorText?: string;
	required?: boolean;
	disabled?: boolean;
	invalid?: boolean;
	fullWidth?: boolean;
	size?: "sm" | "md" | "lg";
	layout?: "vertical" | "horizontal";
	className?: string;
	sx?: React.CSSProperties;
	labelSx?: React.CSSProperties;
};

const FormField = (
	{
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
	}: FormFieldProps,
	children: React.ReactNode,
) => {
	const controlId = id ?? `yj-field-${useId().replace(/:/g, "")}`;
	return (
		<div
			data-size={size}
			data-layout={layout}
			data-disabled={disabled}
			data-invalid={invalid}
			data-full-width={fullWidth}
			className={className}
			style={{ ...sx }}
		>
			{label && (
				<Label
					htmlFor={controlId}
					label={label}
					required={required}
					sx={labelSx}
				/>
			)}
			<div>
				{children}
				{errorText && (
					<div data-error className="error-text">
						{errorText}
					</div>
				)}
			</div>
		</div>
	);
};

export { FormField };
export default FormField;
