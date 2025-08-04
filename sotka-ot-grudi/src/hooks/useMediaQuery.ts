import { useEffect, useState } from "react";

export const useMediaQuery = () => {
	const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => setWidth(window.innerWidth);

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const isMobile = width <= 767;
	const isTablet = width >= 768 && width <= 899;
	const isDesktop = width >= 900;

	return { isMobile, isTablet, isDesktop };
};
