import { useMediaQuery } from 'react-responsive';

export const useMaskSettings = () => {
	// Define all breakpoints
	const isMobileS = useMediaQuery({ maxWidth: 374 }); // 320px
	const isMobileM = useMediaQuery({ minWidth: 375, maxWidth: 424 }); // 375px
	const isMobileL = useMediaQuery({ minWidth: 425, maxWidth: 767 }); // 425px
	const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 }); // 768px
	const isLaptop = useMediaQuery({ minWidth: 1024, maxWidth: 1439 }); // 1024px
	const isLaptopL = useMediaQuery({ minWidth: 1440, maxWidth: 2559 }); // 1440px
	const is4K = useMediaQuery({ minWidth: 2560 }); // 2560px+

	if (isMobileS) {
		return {
			initialMaskPos: '50% -1500vh',
			initialMaskSize: '3100% 3100%',
			maskPos: '50% 7vh',
			maskSize: '50% 50%',
		};
	}

	if (isMobileM) {
		return {
			initialMaskPos: '50% -1500vh',
			initialMaskSize: '3655% 3655%',
			maskPos: '50% 7vh',
			maskSize: '50% 50%',
		};
	}

	if (isMobileL) {
		// return {
		// 	initialMaskPos: '50% -1500vh',
		// 	initialMaskSize: '3500% 3500%',
		// 	maskPos: '50% 7vh',
		// 	maskSize: '50% 50%',
		// };
		return {
			initialMaskPos: '50% -1500vh',
			initialMaskSize: '3100% 3100%',
			maskPos: '50% 7vh',
			maskSize: '50% 50%',
		};
	}

	if (isTablet) {
		return {
			initialMaskPos: '50% -1700vh',
			initialMaskSize: '3500% 3500%',
			maskPos: '50% 17vh',
			maskSize: '30% 30%',
		};
	}

	if (isLaptop) {
		return {
			initialMaskPos: '50% -1700vh',
			initialMaskSize: '3500% 3500%',
			maskPos: '50% 17vh',
			maskSize: '30% 30%',
		};
	}

	if (isLaptopL) {
		return {
			initialMaskPos: '50% 22%',
			initialMaskSize: '4000% 4000%',
			maskPos: '50% 22%',
			maskSize: '20% 20%',
		};
	}

	if (is4K) {
		return {
			initialMaskPos: '50% 22%',
			initialMaskSize: '5500% 5500%',
			maskPos: '50% 22%',
			maskSize: '20% 20%',
		};
	}

	return {
		initialMaskPos: '50% 22%',
		initialMaskSize: '3500% 3500%',
		maskPos: '50% 22%',
		maskSize: '20% 20%',
	};
};
