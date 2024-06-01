import { useRef } from "react";

import { Button } from "./UI/Button.tsx";
import { Form as FormImp, type FormHandle } from "./UI/FormImperative.tsx";

import { Input as InputR } from "./UI/InputRef.tsx";
import { useTimersContext } from "../store/timers-contest.tsx";

export default function AddTimer() {
	const form = useRef<FormHandle>(null);
	const { addTimer } = useTimersContext();

	function handleSaveTimer(data: unknown) {
		const extractedData = data as { name: string; duration: string };

		console.log(extractedData);
		addTimer({
			name: extractedData.name,
			duration: +extractedData.duration,
		});
		form.current?.clear();
	}

	return (
		<FormImp ref={form} onSave={handleSaveTimer} id="add-timer">
			<InputR type="text" label="Name" id="name" />
			<InputR type="number" label="Duration" id="duration" />
			<p>
				<Button>Add Timer</Button>
			</p>
		</FormImp>
	);
}
