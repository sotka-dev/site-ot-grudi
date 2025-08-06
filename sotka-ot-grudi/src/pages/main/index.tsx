import type { FC } from "react";
import Header from "../../components/header";
import styles from "./mainStyles.module.scss";
import classNames from "classnames/bind";
import Welcome from "./blocks/welcome";
import WhoIs from "./blocks/whois";
import Teachers from "./blocks/texchers";
import Calendar from "./blocks/calendar";
import Faq from "./blocks/faq";
import Footer from "../../components/footer";

const cn = classNames.bind(styles);

export const MainPage: FC = () => {
	return (
		<div className={cn("page")}>
			<div>
				<Header />
				<Welcome />
			</div>
			<WhoIs />
			<div className={cn("page_b")}>
				<Teachers />
				<Calendar />
			</div>
			<Faq />
			<Footer />
		</div>
	);
};

export default MainPage;
