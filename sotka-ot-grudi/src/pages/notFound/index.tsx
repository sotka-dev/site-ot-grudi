import { Link } from "react-router-dom";
import Header from "../../components/header";
import Container from "../../components/container";
import Footer from "../../components/footer";
import styles from "./notFound.module.scss";
import classNames from "classnames/bind";

const cn = classNames.bind(styles);

export default function NotFound() {
	return (
		<div>
			<Header />
			<Container>
				<div className={cn("content")}>
					<img
						src="icons/notFound.svg"
						alt="notFound"
						className={cn("image")}
					/>
					<div className={cn("textContent")}>
						<h1 className={cn("tag")}>Упс! Страница ушла на перемену</h1>
						<div className={cn("text")}>
							Кажется, мы столкнулись с математическим парадоксом или
							заблудились в лабиринте алгоритмов. Но не переживайте, знания —
							это путь, который всегда ведет к цели. Вернемся на главную, чтобы
							продолжить наше путешествие в мир физики, математики и
							информатики.
						</div>
						<Link to={"/"} className={cn("button")}>
							Вернуться на главную
						</Link>
					</div>
				</div>
			</Container>
			<Footer />
		</div>
	);
}
