import type { FC } from "react";
import classNames from "classnames/bind";
import styles from "./whois.module.scss";
import Container from "../../../../components/container";

const cn = classNames.bind(styles);

export const WhoIs: FC = () => {
	return (
		<Container>
			<div className={cn("page")}>
				<div className={cn("page__textinfo")}>
					<div className={cn("page__textinfo__name")}>Кто мы такие?</div>
					<div className={cn("page__textinfo__info")}>
						Мы — команда профессионалов, занимающихся подготовкой учеников к ЕГЭ
						и ОГЭ по математике, информатике и физике. Наши преподаватели имеют
						многолетний опыт и высокие результаты. Мы помогаем ученикам
						достигать своих целей и набирать максимальные баллы на экзаменах.
					</div>
					<div className={cn("page__textinfo__info")}>
						Присоединяйтесь к нам и начните свой путь к успеху уже сегодня!
					</div>
				</div>
				<div className={cn("girle_wrapper")}>
					<img
						src="icons/whois/girl.svg"
						className={cn("girle_wrapper__girl")}
					/>
					<div className={cn("questionWrapper")}>
						<img
							src="/icons/whois/quest.svg"
							alt="?"
							className={cn("questionMark")}
						/>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default WhoIs;
