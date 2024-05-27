import { useRef } from "react";

import { Button as ButtonDif } from "./components/Button_Dif_Elements.tsx";
import { Button } from "./components/Button.tsx";
//Without ref
import { Input as InputNoRef } from "./components/Input.tsx";
//With ref
import { Input as InputR } from "./components/InputRef.tsx";
import Container from "./components/Container.tsx";

function App() {
	const input = useRef<HTMLInputElement>(null);

	const hanleClick = () => {
		console.log("click!");
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
		</main>
	);
}

export default App;
