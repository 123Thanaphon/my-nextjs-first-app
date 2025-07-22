import Image from 'next/image'

const TheNavBar = () => {
	return (
		<nav className="container py-4 bg-transparent mx-auto">
			<Image
                src="/images/icons/tongflix-01.png"
				width={100}
				height={100}
				alt="tongflix-icon"
			/>
		</nav>
	);
};

export default TheNavBar;
