import { useState, type FC } from "react";
import styles from "./filters.module.scss";
import classNames from "classnames/bind";
import { CustomSelect } from "../../../../components/customSelect";
import { Button } from "../../../tasksBank/blocks/filters/blocks/button";

const cn = classNames.bind(styles);

export const Filters: FC = () => {
	const [difficulty, setDifficulty] = useState("1");
	const [sort, setSort] = useState("1");

	const handleReset = () => {
		setDifficulty("1");
		setSort("1");
	};

	return (
		<div className={cn("filters")}>
			<div className={cn("name")}>Фильтр</div>

			<div className={cn("content")}>
				<div className={cn("select")}>
					<p>Уровень сложности:</p>
					<CustomSelect
						placeholder="Любой"
						defaultValue="1"
						options={[
							{ label: "Любой", value: "1" },
							{ label: "Легко", value: "2" },
							{ label: "Не легко", value: "3" },
						]}
						value={difficulty}
						onChange={setDifficulty}
					/>
				</div>

				<div className={cn("select")}>
					<p>Сортировка:</p>
					<CustomSelect
						placeholder="Сначала новые"
						defaultValue="1"
						options={[
							{ label: "Сначала новые", value: "1" },
							{ label: "Сначала старые", value: "2" },
							{ label: "Актуальные", value: "3" },
						]}
						value={sort}
						onChange={setSort}
					/>
				</div>
			</div>
			<div className={cn("button")}>
				<Button onClick={handleReset} text={"Сбросить\u00A0фильтры"} />
			</div>
		</div>
	);
};
