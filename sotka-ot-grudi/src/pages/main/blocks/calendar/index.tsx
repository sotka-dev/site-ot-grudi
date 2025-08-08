import type { FC } from "react";
import Container from "../../../../components/container";
import styles from "./calendar.module.scss";
import classNames from "classnames/bind";
import { CALENDAR_MOCK } from "./data";

const cn = classNames.bind(styles);

export const Calendar: FC = () => {
	return (
		<div className={cn("page")}>
			<Container>
				<div className={cn("content")}>
					<div className={cn("name")}>
						КАЛЕНДАРЬ&nbsp;
						<br className={cn("br")} />
						СОБЫТИЙ
					</div>
					<div className={cn("calendar")}>
						{CALENDAR_MOCK.map((el) => (
							<div className={cn("calendar__item")} key={el.data}>
								<div className={cn("calendar__item__date")}>{el.data}</div>
								<div className={cn("calendar__item__info")}>
									<div className={cn("calendar__item__info__name")}>
										{el.name}
									</div>
									<div className={cn("calendar__item__info__more")}>
										Подробнее
									</div>
								</div>
							</div>
						))}
					</div>
				</div>{" "}
			</Container>
		</div>
	);
};

export default Calendar;
