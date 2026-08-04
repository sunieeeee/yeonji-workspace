import styles from "./Label.module.css";

export type LabelProps = {
	label: string;
	required?: boolean;
	htmlFor?: string;
	sx?: React.CSSProperties;
	id?: string;
	className?: string;
};

const Label = ({ label, required, htmlFor, sx, id, className }: LabelProps) => {
	return (
		<label
			id={id}
			htmlFor={htmlFor}
			data-required={required}
			className={`${styles.labelField}${className ? ` ${className}` : ""}`}
			style={sx}
			aria-required={required}
			aria-label={label}
			aria-describedby={required ? `${id}-required` : undefined}
			aria-controls={htmlFor}
		>
			{label}
			{required && <span aria-hidden="true">*</span>}
		</label>
	);
};

export { Label };
export default Label;
