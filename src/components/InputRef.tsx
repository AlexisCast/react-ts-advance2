import { forwardRef, type ComponentPropsWithoutRef } from "react";

type InputProps = {
	label: string;
	id: string;
} & ComponentPropsWithoutRef<"input">;

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ label, id, ...props }, ref) => {
		return (
			<p>
				<label htmlFor={id}>{label}</label>
				<input id={id} type="text" {...props} ref={ref} />
			</p>
		);
	}
);
