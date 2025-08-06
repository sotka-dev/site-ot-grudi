import { useMemo, type FC } from "react";
import Container from "../container";
import NavItem from "./blocks/navItem";
import styles from "./headerStyles.module.scss";
import classNames from "classnames/bind";
import BurgerMenu from "./blocks/burgerMenu";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { useLocation } from "react-router-dom";

const cn = classNames.bind(styles);

export const Header: FC = () => {
	const { isTablet, isMobile } = useMediaQuery();
	const location = useLocation();

	const isViewBurger = useMemo(() => {
		return isTablet || isMobile;
	}, [isTablet, isMobile]);

	return (
		<header className={cn("header")}>
			<Container>
				{!isViewBurger ? (
					<div className={cn("header__content")}>
						<div className={cn("header__content__item")}>
							<NavItem
								link="/"
								isActive={location.pathname == "/"}
								name="главная"
							/>
							<NavItem
								link="/bank"
								isActive={location.pathname == "/bank"}
								name="банк задач"
							/>
						</div>
						<img src="icons/logo_big.svg" />
						<div className={cn("header__content__item")}>
							<NavItem link="" isActive={false} name="преподаватели" />
							<NavItem link="" isActive={false} name="тарифы" />
						</div>
					</div>
				) : (
					<div className={cn("header__content")}>
						<img src="icons/logo_big.svg" className={cn("logo")} />
						<div className={cn("header__content__item")}>
							<BurgerMenu />
						</div>
					</div>
				)}
			</Container>
		</header>
	);
};

export default Header;
