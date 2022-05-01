import React, { useEffect, useState } from "react";
import { Movie } from "./components/Movie";

import "./App.css";
import Logo from "./images/movie-logo.png";
import { MagnifyingGlass } from "phosphor-react";

const POPULAR_FILMS_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=934aadbf9bcaca27b105d27884960f54";

const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=934aadbf9bcaca27b105d27884960f54&query="

function App() {
	const [movies, setMovies] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');

	useEffect(() => {
		getMovies(POPULAR_FILMS_API);
	}, []);

	const getMovies = (API) => {
		fetch(API).then(res => res.json()).then(data => {
			setMovies(data.results);
		});
	}

	const handleOnSubmit = (e) => {
		e.preventDefault();

		if (searchTerm) {
			getMovies(SEARCH_API + searchTerm)
			setSearchTerm('');
		}
	}

	const handleOnChange = (e) => {
		setSearchTerm(e.target.value);
	}

	return (
		<div>
			<header>
				<div className="logo">
					<img src={Logo} alt="" /> React Films
				</div>

				<form onSubmit={handleOnSubmit}>
					<input type="text" placeholder="Search" className="search" value={searchTerm} onChange={handleOnChange} />
					<button type="submit"><MagnifyingGlass size={22} color="#FFF" /></button>
				</form>
			</header>

			<div className="movie-container">
				{movies.length > 0 && movies.map(movie => (
					< Movie key={movie.id} {...movie} />
				))}
			</div>
		</div>

	);
}

export default App;