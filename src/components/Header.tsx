import { Button } from "./UI/Button";

import { useTimersContext } from "../store/timers-contest";

export default function Header() {
	const timersCtx = useTimersContext();

	return (
		<header>
			<h1>ReactTimer</h1>

			<Button
				onClick={
					timersCtx.isRunning
						? timersCtx.stopTimers
						: timersCtx.startTimers
				}
			>
				{timersCtx.isRunning ? "Stop" : "Start"} Timers
			</Button>
		</header>
	);
}
