import { useState } from "react";
import styles from "./BurgerMenu.module.scss";
import classNames from "classnames/bind";
import NavItem from "../navItem";
import { useLocation } from "react-router-dom";

const cn = classNames.bind(styles);

export const BurgerMenu = () => {
	const [open, setOpen] = useState(false);
	const location = useLocation();
	const toggleMenu = () => setOpen(!open);

	return (
		<div className={styles.wrapper}>
			<button
				className={cn("burger", { open })}
				onClick={toggleMenu}
				aria-label="Menu"
			>
				<span />
				<span />
				<span />
			</button>

			<nav className={cn("menu", { open })}>
				<ul>
					<li>
						<NavItem
							link="/"
							isActive={location.pathname == "/"}
							name="главная"
						/>
					</li>
					<li>
						<NavItem
							link="/bank"
							isActive={
								location.pathname == "/bank" ||
								location.pathname == "/bankCatalog"
							}
							name="банк задач"
						/>
					</li>
					<li>
						<NavItem link="" isActive={false} name="преподаватели" />
					</li>
					<li>
						<NavItem link="" isActive={false} name="тарифы" />
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default BurgerMenu;
