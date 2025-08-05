import { useState, useEffect, useRef } from "react";
import styles from "./slider.module.scss";
import classNames from "classnames/bind";
import { MOCK_SLIDER_DATA } from "./data";
import Slide from "./blocks/slide";

const cn = classNames.bind(styles);

export const Slider = () => {
	const [current, setCurrent] = useState(0);
	const touchStartX = useRef<number | null>(null);
	const touchEndX = useRef<number | null>(null);

	// Автопрокрутка каждые 10 секунд
	useEffect(() => {
		const timer = setInterval(() => {
			setCurrent((c) => (c + 1) % MOCK_SLIDER_DATA.length);
		}, 10000);

		return () => clearInterval(timer);
	}, []);

	// Обработка начала касания
	const handleTouchStart = (e: React.TouchEvent) => {
		touchStartX.current = e.changedTouches[0].clientX;
	};

	// Обработка конца касания
	const handleTouchEnd = (e: React.TouchEvent) => {
		touchEndX.current = e.changedTouches[0].clientX;
		handleSwipeGesture();
	};

	// Логика свайпа
	const handleSwipeGesture = () => {
		if (touchStartX.current === null || touchEndX.current === null) return;

		const deltaX = touchStartX.current - touchEndX.current;

		// Минимальное расстояние свайпа, чтобы сработало (например, 50px)
		const threshold = 50;

		if (deltaX > threshold) {
			// свайп влево — следующий слайд
			setCurrent((c) => (c + 1) % MOCK_SLIDER_DATA.length);
		} else if (deltaX < -threshold) {
			// свайп вправо — предыдущий слайд
			setCurrent(
				(c) => (c - 1 + MOCK_SLIDER_DATA.length) % MOCK_SLIDER_DATA.length,
			);
		}

		touchStartX.current = null;
		touchEndX.current = null;
	};

	const next = () => {
		setCurrent((c) => (c + 1) % MOCK_SLIDER_DATA.length);
	};

	const prev = () => {
		setCurrent(
			(c) => (c - 1 + MOCK_SLIDER_DATA.length) % MOCK_SLIDER_DATA.length,
		);
	};

	return (
		<div className={styles.sliderWrapper}>
			<div
				className={styles.slider}
				onTouchStart={handleTouchStart}
				onTouchEnd={handleTouchEnd}
			>
				<div className={styles.track}>
					{MOCK_SLIDER_DATA.map((item, idx) => {
						const pos = idx - current;
						let mod: "center" | "left" | "right" | "hidden" = "hidden";

						if (pos === 0) mod = "center";
						else if (pos === -1 || pos === MOCK_SLIDER_DATA.length - 1)
							mod = "left";
						else if (pos === 1 || pos === -(MOCK_SLIDER_DATA.length - 1))
							mod = "right";

						return (
							<div key={idx} className={cn("slide", mod)}>
								<Slide data={item} />
							</div>
						);
					})}
				</div>

				<div className={styles.dots}>
					{MOCK_SLIDER_DATA.map((_, i) => (
						<button
							key={i}
							className={cn("dot", { active: current === i })}
							onClick={() => setCurrent(i)}
						/>
					))}
				</div>
			</div>

			<div className={styles.buttonsBlock}>
				<button className={cn("arrow", "next")} onClick={next}>
					<img src="icons/techers/arrow.svg" alt="Next" />
				</button>
				<button className={cn("arrow", "prev")} onClick={prev}>
					<img src="icons/techers/arrow.svg" alt="Previous" />
				</button>
			</div>
		</div>
	);
};

export default Slider;
