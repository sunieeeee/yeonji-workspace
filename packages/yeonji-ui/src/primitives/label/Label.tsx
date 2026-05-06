import styles from "./Label.module.css";

export type LabelProps = {
	label: string;
	required?: boolean;
	htmlFor?: string;
	sx?: React.CSSProperties;
};

const Label = ({ label, required, htmlFor, sx }: LabelProps) => {
	return (
		<label
			htmlFor={htmlFor}
			data-required={required}
			className={styles.labelField}
			style={sx}
		>
			{label}
			{required && <span aria-hidden="true">*</span>}
		</label>
	);
};

export { Label };
export default Label;
