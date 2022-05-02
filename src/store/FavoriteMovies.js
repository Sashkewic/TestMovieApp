import { atom } from 'nanostores'

export const favoriteFilms = atom([])

export function addFilm(movie) {
    favoriteFilms.set([...favoriteFilms.get(), movie]);
}