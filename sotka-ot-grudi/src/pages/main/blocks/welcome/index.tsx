import type { FC } from "react";
import classNames from "classnames/bind";
import styles from "./welcome.module.scss";

const cn = classNames.bind(styles);

export const Welcome: FC = () => {
	return (
		<div className={cn("page")}>
			<div className={cn("page__left")}>
				<img
					src="icons/welcome/book_girl.svg"
					className={cn("page__left__book_girl")}
				/>
				<img
					src="icons/welcome/logarimph.svg"
					className={cn("page__left__logarimph")}
				/>
				<img
					src="icons/welcome/parabola.svg"
					className={cn("page__left__parabola")}
				/>
				<img
					src="icons/welcome/sportsmen.svg"
					className={cn("page__left__sportsmen")}
				/>
				<img src="icons/welcome/atom.svg" className={cn("page__left__atom")} />
			</div>
			<img src="icons/welcome/predmets.svg" className={cn("predmets")} />
			<div className={cn("content")}>
				<div className={cn("content__welcome")}>Добро пожаловать в школу</div>
				<div className={cn("content__name")}>
					<p>Сотка</p>
					<p>От груди</p>
				</div>
				<div className={cn("content__cell")}>Подготовка к егэ и огэ</div>
			</div>
			<div className={cn("page__right")}>
				<img
					src="icons/welcome/sportsmenka.svg"
					className={cn("page__right__sportsmenka")}
				/>
				<img
					src="icons/welcome/treugolnik.svg"
					className={cn("page__right__treugolnik")}
				/>
				<img
					src="icons/welcome/magnit.svg"
					className={cn("page__right__magnit")}
				/>
				<img
					src="icons/welcome/books.svg"
					className={cn("page__right__books")}
				/>
				<img
					src="icons/welcome/formuls.svg"
					className={cn("page__right__formuls")}
				/>
			</div>
		</div>
	);
};

export default Welcome;
