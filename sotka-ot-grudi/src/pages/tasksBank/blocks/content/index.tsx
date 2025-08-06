import type { FC } from "react";
import { useFiltersBankTasks } from "../../context/useFiltersBankTasks";
import { BankItem } from "../filters/blocks/item";
import styles from "./content.module.scss";
import classNames from "classnames/bind";

const cn = classNames.bind(styles);

export const BankContent: FC = () => {
	const { appliedFilters } = useFiltersBankTasks();

	if (!appliedFilters) return null;

	const items = [
		{
			question: "Задание 3. Название задания 3",
			answers: ["Категория задания 4", "Ещё одна категория задания 4"],
		},
		{
			question: "Задание 3. Название задания 3",
			answers: ["Категория задания 4", "Ещё одна категория задания 4"],
		},
		{
			question: "Задание 3. Название задания 3",
			answers: ["Категория задания 4", "Ещё одна категория задания 4"],
		},
		{
			question: "Задание 3. Название задания 3",
			answers: ["Категория задания 4", "Ещё одна категория задания 4"],
		},
	];

	return (
		<div className={cn("page")}>
			{items.map((item, i) => (
				<BankItem key={i} question={item.question} answers={item.answers} />
			))}
		</div>
	);
};

export default BankContent;
