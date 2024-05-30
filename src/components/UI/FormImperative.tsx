import {
	type FormEvent,
	forwardRef,
	useImperativeHandle,
	useRef,
	type ComponentPropsWithoutRef,
} from "react";

export type FormHandle = {
	clear: () => void;
};

type FormProps = ComponentPropsWithoutRef<"form"> & {
	onSave: (value: unknown) => void;
};

export const Form = forwardRef<FormHandle, FormProps>(
	({ onSave, children, ...props }, ref) => {
		const form = useRef<HTMLFormElement>(null);

		useImperativeHandle(ref, () => {
			return {
				clear() {
					console.log("Clearing...");
					form.current?.reset();
				},
			};
		});

		const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
			event.preventDefault();

			const formData = new FormData(event.currentTarget);
			const data = Object.fromEntries(formData);

			onSave(data);
			// form.current?.reset();
		};

		return (
			<form onSubmit={handleSubmit} {...props} ref={form}>
				{children}
			</form>
		);
	}
);
