import type { FC } from "react";
import Container from "../container";
import styles from "./footer.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

interface Contacts {
	name: string;
	url: string;
	icon: string;
}

const DATA: Contacts[] = [
	{
		name: "TikTok",
		url: "/",
		icon: "icons/footer/tt.svg",
	},
	{
		name: "Telegram",
		url: "/",
		icon: "icons/footer/tg.svg",
	},
	{
		name: "Youtube",
		url: "/",
		icon: "icons/footer/yt.svg",
	},
	{
		name: "Vkontakte",
		url: "/",
		icon: "icons/footer/vk.svg",
	},
];

const cn = classNames.bind(styles);

export const Footer: FC = () => {
	return (
		<div className={cn("footer")}>
			<Container>
				<div className={cn("content")}>
					<div className={cn("name")}>КОНТАКТЫ</div>

					<div className={cn("contacts")}>
						{DATA.map((el) => (
							<a key={el.name} href={el.url}>
								<img src={el.icon} />
								<div>{el.name}</div>
							</a>
						))}
					</div>
					<div className={cn("line")}></div>
					<div className={cn("text")}>
						<div className={cn("nav")}>
							<Link to="/">ГЛАВНАЯ</Link>
							<Link to="/bank">БАНК ЗАДАЧ</Link>
							<Link to="/">ПРЕПОДАВАТЕЛИ</Link>
							<Link to="/">ТАРИФЫ</Link>
						</div>
						<div>© 2024 Сотка от груди</div>
						<Link to="/">Пользовательское соглашение</Link>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Footer;
