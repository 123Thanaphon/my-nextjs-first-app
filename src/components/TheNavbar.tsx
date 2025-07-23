import Image from 'next/image'
import Link from 'next/link'
import TongFlixLogo from 'assets/images/icons/tongflix-01.png';

const TheNavBar = () => {
	return (
		<nav className="container py-4 bg-transparent mx-auto flex items-center">
			<Link href="/">
				<Image
					src={TongFlixLogo}
					width={100}
					height={100}
					priority={false}
					loading="lazy"
					className="mr-5"
					alt="tongflix-icon"
				/>
			</Link>

			<div className="flex items-center justify-between">
				<ul className="flex space-x-4">
					<li>
						<Link href="/" className="text-white hover:underline">Home</Link>
					</li>
					<li>
						<Link href="/movies" className="text-white hover:underline">Movies</Link>
					</li>
					<li>
						<Link href="/series" className="text-white hover:underline">Series</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default TheNavBar;
