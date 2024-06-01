import { useTimersContext } from "../store/timers-contest";
import { Timer } from "./Timer.tsx";

export const Timers = () => {
	const { timers } = useTimersContext();

	return (
		<ul>
			{timers.map((timer) => (
				<li key={timer.name}>
					<Timer {...timer} />
				</li>
			))}
		</ul>
	);
};
