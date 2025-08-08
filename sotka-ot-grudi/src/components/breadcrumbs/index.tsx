import { Link } from "react-router-dom";
import styles from "./Breadcrumbs.module.scss";

interface Crumb {
	label: string;
	path?: string;
}

interface BreadcrumbsProps {
	crumbs: Crumb[];
}

const Breadcrumbs = ({ crumbs }: BreadcrumbsProps) => {
	return (
		<nav className={styles.breadcrumbs}>
			{crumbs.map((crumb, index) => {
				const isLast = index === crumbs.length - 1;

				return (
					<span key={index} className={styles.crumb}>
						{crumb.path && !isLast ? (
							<Link to={crumb.path} className={styles.link}>
								{crumb.label}
							</Link>
						) : (
							<span className={styles.active}>{crumb.label}</span>
						)}

						{!isLast && <span className={styles.separator}>/</span>}
					</span>
				);
			})}
		</nav>
	);
};

export default Breadcrumbs;
