import { FormEvent, type ComponentPropsWithoutRef } from "react";

type FormProps = ComponentPropsWithoutRef<"form"> & {
	onSave: (value: unknown) => void;
};

export const Form = ({ onSave, children, ...props }: FormProps) => {
	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);
		const data = Object.fromEntries(formData);

		onSave(data);
	};

	return (
		<form onSubmit={handleSubmit} {...props}>
			{children}
		</form>
	);
};
