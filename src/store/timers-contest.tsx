import { createContext, useContext, useReducer, type ReactNode } from "react";

type Timer = {
	name: string;
	duration: number;
};

type TimersSate = {
	isRunning: boolean;
	timers: Timer[];
};

const initialState: TimersSate = {
	isRunning: true,
	timers: [],
};

type TimersContextValue = TimersSate & {
	addTimer: (timerData: Timer) => void;
	startTimers: () => void;
	stopTimers: () => void;
};

export const TimersContext = createContext<TimersContextValue | null>(null);

export const useTimersContext = () => {
	const timersCtx = useContext(TimersContext);

	if (timersCtx === null) {
		throw new Error("TimersContext is null - that should not be the case!");
	}

	return timersCtx;
};

type TimersContextProviderProps = {
	children: ReactNode;
};

type StartTimersAction = {
	type: "START_TIMERS";
};
type StopTimersAction = {
	type: "STOP_TIMERS";
};
type AddTimerAction = {
	type: "ADD_TIMER";
	payload: Timer;
};

type Action = StartTimersAction | StopTimersAction | AddTimerAction;

const timersReducer = (state: TimersSate, action: Action): TimersSate => {
	if (action.type === "START_TIMERS") {
		return {
			...state,
			isRunning: true,
		};
	}
	if (action.type === "STOP_TIMERS") {
		return {
			...state,
			isRunning: false,
		};
	}
	if (action.type === "ADD_TIMER") {
		return {
			...state,
			timers: [
				...state.timers,
				{
					name: action.payload.name,
					duration: action.payload.duration,
				},
			],
		};
	}

	return state;
};

export const TimersContextProvider = ({
	children,
}: TimersContextProviderProps) => {
	const [timersState, dispatch] = useReducer(timersReducer, initialState);

	const ctx: TimersContextValue = {
		timers: timersState.timers,
		isRunning: timersState.isRunning,
		addTimer(timerData) {
			dispatch({ type: "ADD_TIMER", payload: timerData });
		},
		startTimers() {
			dispatch({ type: "START_TIMERS" });
		},
		stopTimers() {
			dispatch({ type: "STOP_TIMERS" });
		},
	};

	return (
		<TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
	);
};
