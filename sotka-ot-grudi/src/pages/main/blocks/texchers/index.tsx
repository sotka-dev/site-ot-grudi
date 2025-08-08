import type { FC } from "react";
import Container from "../../../../components/container";
import Slider from "../../../../components/slider";
import styles from "./texchers.module.scss";
import classNames from "classnames/bind";

const cn = classNames.bind(styles);

export const Teachers: FC = () => {
	return (
		<div className={cn("page")}>
			<Container>
				<div className={cn("content")}>
					<div className={cn("name")}>
						НАШИ&nbsp;
						<br className={cn("br")} />
						ПРЕПОДАВАТЕЛИ
					</div>
					<Slider />
					<div className={cn("button")}>
						Записаться&nbsp;к&nbsp;преподавателям
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Teachers;
