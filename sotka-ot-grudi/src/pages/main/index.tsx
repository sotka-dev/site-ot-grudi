import type { FC } from "react";
import Header from "../../components/header";
import styles from "./mainStyles.module.scss";
import classNames from "classnames/bind";
import Welcome from "./blocks/welcome";
import WhoIs from "./blocks/whois";
import Teachers from "./blocks/texchers";

const cn = classNames.bind(styles);

export const MainPage: FC = () => {
	return (
		<div className={cn("page")}>
			<div>
				<Header />
				<Welcome />
			</div>
			<WhoIs />
			<Teachers />
		</div>
	);
};

export default MainPage;
