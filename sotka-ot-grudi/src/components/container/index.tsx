import { type FC, type PropsWithChildren } from "react";
import styles from "./containerStyles.module.scss";
import classNames from "classnames/bind";

const cn = classNames.bind(styles);

const Container: FC<PropsWithChildren> = ({ children }) => {
	return <div className={cn("container")}>{children}</div>;
};

export default Container;
