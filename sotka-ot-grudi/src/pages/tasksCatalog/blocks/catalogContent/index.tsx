import { type FC } from "react";
import styles from "./catalogContent.module.scss";
import classNames from "classnames/bind";

const cn = classNames.bind(styles);

export const CatalogContent: FC = () => {
	return (
		<div className={cn("list")}>
			<div>aasd</div>
		</div>
	);
};
