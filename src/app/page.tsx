'use client';
import { useState, useEffect } from 'react'
import { getMovies } from '@/services/movie';
import { Movie } from '@/interfaces/movie';

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
				<h1 className="font-bold text-white">
					Home Page
				</h1>
				<div className="grid grid-cols-5 gap-4">
					{movieList?.map((movie, index) =>(
						<div key={index} className="text-white aspect-3/2 object-cover">
							{movie.primaryTitle}
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default HomePage;