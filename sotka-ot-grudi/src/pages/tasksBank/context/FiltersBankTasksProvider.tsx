import { useState, type ReactNode } from "react";
import {
	FiltersBankTasksContext,
	type FiltersBankTasks,
	type FiltersBankTasksContextType,
} from "./FiltersBankTasksContext";

const defaultFilters: FiltersBankTasks = {};

export const FiltersBankTasksProvider = ({
	children,
}: {
	children: ReactNode;
}) => {
	const [filters, setFiltersState] = useState<FiltersBankTasks>(defaultFilters);
	const [appliedFilters, setAppliedFilters] = useState<FiltersBankTasks | null>(
		null,
	);

	const setFilters = (newFilters: FiltersBankTasks) => {
		setFiltersState(newFilters);
	};

	const updateFilter = <K extends keyof FiltersBankTasks>(
		key: K,
		value: FiltersBankTasks[K],
	) => {
		setFiltersState((prev) => ({ ...prev, [key]: value }));
	};

	const resetFilters = () => {
		setFiltersState(defaultFilters);
		setAppliedFilters(null);
	};

	const applyFilters = () => {
		setAppliedFilters(filters);
	};

	const contextValue: FiltersBankTasksContextType & {
		appliedFilters: FiltersBankTasks | null;
		applyFilters: () => void;
	} = {
		filters,
		setFilters,
		updateFilter,
		resetFilters,
		appliedFilters,
		applyFilters,
	};

	return (
		<FiltersBankTasksContext.Provider value={contextValue}>
			{children}
		</FiltersBankTasksContext.Provider>
	);
};
