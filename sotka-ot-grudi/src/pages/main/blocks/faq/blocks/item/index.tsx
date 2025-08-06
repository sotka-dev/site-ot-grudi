import { useRef, useState } from "react";
import styles from "./item.module.scss";
import classNames from "classnames/bind";

const cn = classNames.bind(styles);

interface FaqItemProps {
	question: string;
	answer: string;
}

export const FaqItem = ({ question, answer }: FaqItemProps) => {
	const [open, setOpen] = useState(false);
	const contentRef = useRef<HTMLDivElement>(null);

	const toggle = () => {
		setOpen((prev) => !prev);
	};

	return (
		<div className={cn("faqItem", { open })}>
			<div className={cn("header")} onClick={toggle}>
				<span className={cn("question")}>{question}</span>
				<img src="icons/techers/arrow.svg" className={cn("arrow")} />
			</div>
			<div
				ref={contentRef}
				className={cn("answer")}
				style={{
					maxHeight: open
						? `${contentRef.current?.scrollHeight ?? 0}px`
						: "0px",
				}}
			>
				<div className={cn("inner")}>{answer}</div>
			</div>
		</div>
	);
};

export default FaqItem;
