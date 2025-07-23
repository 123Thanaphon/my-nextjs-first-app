import axios from "axios";
const API_BASE_URL = "https://api.imdbapi.dev";
import { Movie } from '../interfaces/movie';

export const getMovies = async ({ title, startYear, typesMovie }: { title: string; startYear?: number; typesMovie: string }) => {
	try {
		const response = await axios.get(`${API_BASE_URL}/advancedSearch/titles`, {
			params: {
				query: title ?? "A",
				types: typesMovie ?? "MOVIE",
				startYear: startYear ?? 2025
			}
		});

		return response.data?.titles as unknown as Movie ?? [];
	} catch (error) {
		console.log(error);
		return [];
	}
};

export default getMovies;
