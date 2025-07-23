'use client';
import { useState, useEffect } from 'react';
import { getMovies } from '@/services/movie';
import { Movie } from '@/interfaces/movie';
import Image from 'next/image'
import TongFlixLogo from 'assets/images/icons/tongflix-01.png';

export const HomePage = () => {
	const [movieList, setMovieList] = useState<Movie[]>([])

	useEffect(() => {
		const fetchMovies = async () => {
			const movieList = await getMovies({
				title: 'A',
				startYear: 2025,
				typesMovie: 'MOVIE'
			});

			setMovieList(Array.isArray(movieList) ? movieList : []);
		};

		fetchMovies();
	}, []);

	return (
		<>
			<div className="container mx-auto bg-transparent">
				<div className="grid grid-cols-5 gap-4">
					{movieList?.map((movie, index) =>(
						<div
							key={index}
							className="text-white aspect-9/16 bg-transparent rounded-3xl overflow-hidden"
							style={{ width: '100%', height: 'auto' }}
						>
							<Image
								src={movie.primaryImage?.url ?? TongFlixLogo}
								alt={movie.primaryTitle}
								width={movie.primaryImage?.width || 100}
								height={movie.primaryImage?.height || 100}
								style={{ objectFit: movie.primaryImage?.url ? "cover" : "contain", width: '100%', height: '100%' }}
							/>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default HomePage;