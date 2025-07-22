import Image from 'next/image'
import TongFlixLogo from 'assets/images/icons/tongflix-01.png';

const TheNavBar = () => {
	return (
		<nav className="container py-4 bg-transparent mx-auto">
			<Image
				src={TongFlixLogo}
				width={100}
				height={100}
				priority={false}
				loading="lazy"
				alt="tongflix-icon"
			/>
		</nav>
	);
};

export default TheNavBar;
