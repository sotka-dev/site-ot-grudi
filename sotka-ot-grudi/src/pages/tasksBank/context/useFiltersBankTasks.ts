import { useContext } from "react";
import {
	FiltersBankTasksContext,
	type FiltersBankTasksContextType,
} from "./FiltersBankTasksContext";

export const useFiltersBankTasks = (): FiltersBankTasksContextType => {
	const context = useContext(FiltersBankTasksContext);
	if (!context) {
		throw new Error(
			"useFiltersBankTasks must be used within a FiltersBankTasksProvider",
		);
	}
	return context;
};
