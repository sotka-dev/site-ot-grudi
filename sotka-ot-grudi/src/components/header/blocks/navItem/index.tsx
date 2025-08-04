import type { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./navItem.module.scss";
import classNames from "classnames/bind";

interface Props {
	isActive: boolean;
	name: string;
	link: string;
}

const cn = classNames.bind(styles);

export const NavItem: FC<Props> = ({ isActive, name, link }) => {
	return (
		<Link to={link} className={cn("navLink")}>
			<div className={cn("navLink__text")}>{name}</div>
			{isActive && <span className={cn("navLink__isActive")}></span>}
		</Link>
	);
};

export default NavItem;
