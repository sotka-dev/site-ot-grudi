import { type FC } from "react";
import styles from "./tasksCatalogItem.module.scss";
import classNames from "classnames/bind";

const cn = classNames.bind(styles);

interface Task {
	tag: string;
	difficulty: number; // 1–3
	number: string;
	text: string;
}

interface Props {
	task: Task;
}

export const TasksCatalogItem: FC<Props> = ({ task }) => {
	// Генерация звёздочек
	const stars = Array.from({ length: 3 }, (_, i) =>
		i < task.difficulty ? "icons/hard/star.svg" : "icons/hard/star_empt.svg",
	);

	return (
		<div className={cn("container")}>
			<div className={cn("content")}>
				<div className={cn("content__header")}>
					<div className={cn("content__header__first")}>
						<div className={cn("content__header__tage")}>{task.tag}</div>
						<div className={cn("content__header__complexity")}>
							<p>Уровень сложности:</p>
							<div className={cn("content__header__complexity__hard")}>
								{stars.map((src, idx) => (
									<img key={idx} src={src} alt="star" />
								))}
							</div>
						</div>
					</div>
					<div className={cn("content__header__number")}>№ {task.number}</div>
				</div>

				<div className={cn("content__task")}>
					<div className={cn("content__task__name")}>Задача</div>
					<div className={cn("content__task__text")}>{task.text}</div>
				</div>

				<div className={cn("content__footer")}>
					<div className={cn("content__footer__butt")}>Ответ</div>
					<div className={cn("content__footer__butt")}>Решение</div>
				</div>
			</div>
		</div>
	);
};
