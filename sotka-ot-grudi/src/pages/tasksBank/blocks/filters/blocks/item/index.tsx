import { useState, useRef } from "react";
import styles from "./item.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

const cn = classNames.bind(styles);

interface FaqItemProps {
	question: string;
	answers: string[];
}

export const BankItem = ({ question, answers }: FaqItemProps) => {
	const [open, setOpen] = useState(false);
	const contentRef = useRef<HTMLDivElement>(null);

	const toggle = () => setOpen((prev) => !prev);

	return (
		<div className={cn("faqItem", { open })}>
			<div className={cn("question")} onClick={toggle}>
				<span>{question}</span>
				<img src="icons/techers/arrow.svg" className={cn("arrow")} />
			</div>
			<div
				className={cn("answersWrapper")}
				style={{
					maxHeight: open ? `${contentRef.current?.scrollHeight}px` : "0px",
				}}
				ref={contentRef}
			>
				{answers.map((answer, i) => (
					<Link key={i} className={cn("answer")} to="/bankCatalog">
						{answer}
					</Link>
				))}
			</div>
		</div>
	);
};
