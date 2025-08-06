import React from "react";
import styles from "./button.module.scss";
import classNames from "classnames/bind";

const cn = classNames.bind(styles);

interface ButtonProps {
	text: string;
	isDisabled?: boolean;
	onClick: () => void;
}

export const ButtonGreat: React.FC<ButtonProps> = ({
	text,
	isDisabled = false,
	onClick,
}) => {
	return (
		<button
			onClick={onClick}
			disabled={isDisabled}
			className={cn("button", { disabled: isDisabled })}
		>
			{text}
		</button>
	);
};
