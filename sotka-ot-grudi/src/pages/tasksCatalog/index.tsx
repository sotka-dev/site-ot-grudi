import type { FC } from "react";
import Footer from "../../components/footer";
import styles from "./tasksCatalog.module.scss";
import classNames from "classnames/bind";
import Container from "../../components/container";

import Breadcrumbs from "../../components/breadcrumbs";
import { FiltersBankTasksProvider } from "../tasksBank/context/FiltersBankTasksProvider";
import { Filters } from "./blocks/filters";
import Header from "../../components/header";
import { CatalogContent } from "./blocks/catalogContent";

const cn = classNames.bind(styles);

const crumbs = [{ label: "Главная", path: "/" }, { label: "Банк задач" }];

export const TasksCatalog: FC = () => {
	return (
		<FiltersBankTasksProvider>
			<div className={cn("page")}>
				<Header />
				<Container>
					<div className={cn("header")}>
						<Breadcrumbs crumbs={crumbs} />
						<div className={cn("name")}>Банк задач</div>
					</div>
					<div className={cn("content")}>
						<Filters />
						<CatalogContent />
					</div>
				</Container>
				<Footer />
			</div>
		</FiltersBankTasksProvider>
	);
};
