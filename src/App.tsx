import { useRef } from "react";

import { Button as ButtonDif } from "./components/UI/Button_Dif_Elements.tsx";
import { Button } from "./components/UI/Button.tsx";
//Without ref
import { Input as InputNoRef } from "./components/UI/Input.tsx";
//With ref
import { Input as InputR } from "./components/UI/InputRef.tsx";
import Container from "./components/UI/Container.tsx";
import { Form } from "./components/UI/Form.tsx";
import {
	Form as FormImp,
	type FormHandle,
} from "./components/UI/FormImperative.tsx";
import AddTimer from "./components/AddTimer.tsx";
import Header from "./components/Header.tsx";
import { Timers } from "./components/Timers.tsx";
import { TimersContextProvider } from "./store/timers-contest.tsx";
import FetchingExample from "./components/FetchingExample/FetchingExample";

function App() {
	const input = useRef<HTMLInputElement>(null);
	const customForm = useRef<FormHandle>(null);

	const hanleClick = () => {
		console.log("click!");
	};

	const handleSave = (data: unknown) => {
		const extractedData = data as { name: string; age: string };
		console.log({ extractedData });
	};

	const handleSaveImperative = (data: unknown) => {
		const extractedData = data as { name: string; age: string };
		console.log("IMPS");
		console.log({ extractedData });
		customForm.current?.clear();
	};

	return (
		<main>
			<InputNoRef id="name" label="Your name" type="text" />
			<InputNoRef id="age" label="Your age" type="number" />
			<p>
				<ButtonDif el="button">A Button</ButtonDif>
			</p>
			<p>
				<ButtonDif el="anchor" href="https://google.com">
					A Link
				</ButtonDif>
			</p>
			<p>
				<Button>A Button</Button>
			</p>
			<p>
				<Button href="https://google.com">A Link</Button>
			</p>
			<Container as={Button} onClick={hanleClick}>
				Click Me!
			</Container>
			<InputR id="name" label="Your name" type="text" ref={input} />
			<InputR id="age" label="Your age" type="number" />
			<hr />
			<Form onSave={handleSave}>
				<InputR type="text" label="name" id="name" />
				<InputR type="number" label="age" id="age" />
				<p>
					<Button>Save</Button>
				</p>
			</Form>
			<hr />
			<FormImp onSave={handleSaveImperative} ref={customForm}>
				<InputR type="text" label="name" id="name" />
				<InputR type="number" label="age" id="age" />
				<p>
					<Button>Save</Button>
				</p>
			</FormImp>
			<hr />
			<TimersContextProvider>
				<Header />
				<main>
					<AddTimer />
					<Timers />
				</main>
			</TimersContextProvider>
			<hr />
			<FetchingExample />
		</main>
	);
}

export default App;
