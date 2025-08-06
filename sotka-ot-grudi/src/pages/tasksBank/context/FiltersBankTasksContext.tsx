import { createContext } from "react";

export type ExamType = "егэ" | "огэ";

export type SubjectType =
	| "Математика (профильная)"
	| "Математика (базовая)"
	| "Физика"
	| "Информатика";

export interface FiltersBankTasks {
	exam?: ExamType;
	subject?: SubjectType;
}

export interface FiltersBankTasksContextType {
	filters: FiltersBankTasks;
	setFilters: (filters: FiltersBankTasks) => void;
	updateFilter: <K extends keyof FiltersBankTasks>(
		key: K,
		value: FiltersBankTasks[K],
	) => void;
	resetFilters: () => void;

	appliedFilters: FiltersBankTasks | null;
	applyFilters: () => void;
}

export const FiltersBankTasksContext = createContext<
	FiltersBankTasksContextType | undefined
>(undefined);
