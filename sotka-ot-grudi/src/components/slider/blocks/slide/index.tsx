import type { FC } from "react";
import styles from "./slide.module.scss";
import type { SliderDataPr } from "../../data";

interface Props {
	data: SliderDataPr;
}

const Slide: FC<Props> = ({ data }) => {
	return (
		<div className={styles.card}>
			<img src={data.image} alt={data.name} className={styles.image} />

			<div className={styles.info}>
				<h3 className={styles.name}>{data.name}</h3>
				<p className={styles.desc}>{data.description}</p>

				<ul className={styles.more}>
					{data.moreDescription.map((m, idx) => (
						<div className={styles.itemDesck}>
							<div className={styles.marker}></div>
							<div key={idx}>{m}</div>
						</div>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Slide;
