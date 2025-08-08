import { type FC } from "react";
import styles from "./catalogContent.module.scss";
import classNames from "classnames/bind";
import { TasksCatalogItem } from "./blocks/item";

const cn = classNames.bind(styles);

const tasks = [
	{
		tag: "Физика",
		difficulty: 1,
		number: "01564",
		text: "При температуре 250 K и давлении 1,5·10⁵ Па плотность газа равна 2 кг/м³. Какова молярная масса этого газа? Ответ приведите в килограммах на моль с точностью до десятичных.",
	},
	{
		tag: "Математика",
		difficulty: 3,
		number: "02589",
		text: "При температуре 250 K и давлении 1,5·10⁵ Па плотность газа равна 2 кг/м³. Какова молярная масса этого газа? Ответ приведите в килограммах на моль с точностью до десятичных.",
	},
	{
		tag: "Информатика",
		difficulty: 2,
		number: "12321",
		text: "При температуре 250 K и давлении 1,5·10⁵ Па плотность газа равна 2 кг/м³. Какова молярная масса этого газа? Ответ приведите в килограммах на моль с точностью до десятичных.",
	},
];

export const CatalogContent: FC = () => {
	return (
		<div className={cn("list")}>
			<div className={cn("items")}>
				{tasks.map((task, index) => (
					<TasksCatalogItem key={index} task={task} />
				))}
			</div>
		</div>
	);
};
