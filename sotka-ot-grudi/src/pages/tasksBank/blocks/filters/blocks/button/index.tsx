import React from "react";
import styles from "./button.module.scss";
import classNames from "classnames/bind";

const cn = classNames.bind(styles);

interface ButtonProps {
	text: string;
	onClick: () => void;
	isActive?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
	text,
	onClick,
	isActive = false,
}) => {
	return (
		<button className={cn("button", { active: isActive })} onClick={onClick}>
			{text}
		</button>
	);
};
