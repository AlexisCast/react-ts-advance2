import { Button as ButtonDif } from "./components/Button_Dif_Elements.tsx";
import { Button } from "./components/Button.tsx";
import Input from "./components/Input.tsx";
import Container from "./components/Container.tsx";

function App() {
	return (
		<main>
			<Input id="name" label="Your name" type="text" />
			<Input id="age" label="Your age" type="number" />
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
			<Container as={Button} />
		</main>
	);
}

export default App;
