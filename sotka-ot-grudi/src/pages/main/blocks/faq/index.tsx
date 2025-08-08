import type { FC } from "react";
import Container from "../../../../components/container";
import FaqItem from "./blocks/item";
import styles from "./faq.module.scss";
import classNames from "classnames/bind";

const cn = classNames.bind(styles);

export const Faq: FC = () => {
	return (
		<div className={cn("page")}>
			<Container>
				<div className={cn("wrapper")}>
					<div className={cn("name")}>
						ЧАСТО&nbsp;
						<br className={cn("br")} />
						ЗАДАВАЕМЫЕ ВОПРОСЫ
					</div>
					<div className={cn("content")}>
						<FaqItem
							question="Что такое проект «Сотка от груди»?"
							answer="Чтобы записаться на курс, вам нужно зарегистрироваться на нашем сайте, выбрать интересующий вас курс и следовать инструкциям по оплате."
						/>
						<FaqItem
							question="Что такое проект «Сотка от груди»?"
							answer="Чтобы записаться на курс, вам нужно зарегистрироваться на нашем сайте, выбрать интересующий вас курс и следовать инструкциям по оплате."
						/>
						<FaqItem
							question="Что такое проект «Сотка от груди»?"
							answer="Чтобы записаться на курс, вам нужно зарегистрироваться на нашем сайте, выбрать интересующий вас курс и следовать инструкциям по оплате."
						/>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Faq;
