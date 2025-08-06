import type { FC } from "react";
import { useFiltersBankTasks } from "../../context/useFiltersBankTasks";
import styles from "./filters.module.scss";
import classNames from "classnames/bind";
import { Button } from "./blocks/button";
import { ButtonGreat } from "../../../../components/button";

const cn = classNames.bind(styles);

const examOptions = ["егэ", "огэ"] as const;
const subjectOptions = [
	"Математика (профильная)",
	"Математика (базовая)",
	"Физика",
	"Информатика",
] as const;

export const Filters: FC = () => {
	const { filters, updateFilter, resetFilters, applyFilters } =
		useFiltersBankTasks();

	const hasSelectedFilters = filters.exam || filters.subject;
	const bothFiltersSelected = !!filters.exam && !!filters.subject;

	return (
		<div className={cn("filtersBlock")}>
			{hasSelectedFilters && (
				<button
					className={cn("resetAbsolute")}
					onClick={resetFilters}
					aria-label="Сбросить фильтры"
				>
					× сбросить
				</button>
			)}

			<div className={cn("group")}>
				<div className={cn("label")}>Экзамен:</div>
				{examOptions.map((exam) => (
					<Button
						key={exam}
						text={exam.toUpperCase()}
						isActive={filters.exam === exam}
						onClick={() =>
							updateFilter("exam", filters.exam === exam ? undefined : exam)
						}
					/>
				))}
			</div>

			<div className={cn("group")}>
				<div className={cn("label")}>Предмет:</div>
				{subjectOptions.map((subject) => (
					<Button
						key={subject}
						text={subject}
						isActive={filters.subject === subject}
						onClick={() =>
							updateFilter(
								"subject",
								filters.subject === subject ? undefined : subject,
							)
						}
					/>
				))}
			</div>

			<div className={cn("applyWrapper")}>
				<ButtonGreat
					text="Применить"
					onClick={() => {
						applyFilters();
					}}
					isDisabled={!bothFiltersSelected}
				/>
			</div>
		</div>
	);
};

export default Filters;
