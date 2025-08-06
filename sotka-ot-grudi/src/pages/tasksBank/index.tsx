import type { FC } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import styles from "./mainStyles.module.scss";
import classNames from "classnames/bind";
import { FiltersBankTasksProvider } from "./context/FiltersBankTasksProvider";
import Container from "../../components/container";
import Filters from "./blocks/filters";
import BankContent from "./blocks/content";

const cn = classNames.bind(styles);
export const TasksBank: FC = () => {
	return (
		<FiltersBankTasksProvider>
			<div className={cn("page")}>
				<Header />
				<Container>
					<div className={cn("content")}>
						<Filters />
						<BankContent />
					</div>
				</Container>
				<Footer />
			</div>
		</FiltersBankTasksProvider>
	);
};

export default TasksBank;
