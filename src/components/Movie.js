import React, { useState } from "react";

import { useStore } from '@nanostores/react';
import { favoriteFilms, addFilm } from '../store/FavoriteMovies.js';

const IMG_API = "https://image.tmdb.org/t/p/w500";

const setVote = (vote) => {
    if (vote >= 8) {
        return 'green'
    }

    else if (vote >= 5) {
        return 'orange'
    }

    else {
        return 'red'
    }
}

export const Movie = ({ title, poster_path, overview, vote_average, release_date }) => {
    const [iconClicked, setClicked] = useState(false);

    return (
        <div className="movie">
            <div className="movie-header">
                <img src={poster_path ? (IMG_API + poster_path) : 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1159&q=80'} alt={title} />
            </div>

            <div className="movie-info">
                <h3 className="movie-name">{title}</h3>
                <span className={`tag ${setVote(vote_average)}`}>{vote_average}</span>
            </div>

            <div className="movie-over">
                <span>Date: {release_date}</span>
                <h2>Overview</h2>
                <p>{overview}</p>
                <span className="favorite"><ion-icon name={iconClicked ? "heart-sharp" : "heart-outline"} alt="" onClick={() => { addFilm(title); setClicked(true); }}></ion-icon></span>
            </div>
        </div>
    )
}