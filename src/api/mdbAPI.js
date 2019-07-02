/**
 * See https://developers.themoviedb.org/3/discover/movie-discover for API JSON response
 */
const API_KEY = 'ed937d243177d63a4572d52a02afaa8b';
const API_URL = 'https://api.themoviedb.org/3/';


// Movie images SEE https://developers.themoviedb.org/3/getting-started/images
// Image URL Format: https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/';

// Image backdrop sizes:  w300, w780, w1280, original
const BACKDROP_SIZE = 'w1280';

// Image poster sizes: w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE = 'w500';

export {
    API_URL,
        API_KEY,
        IMAGE_BASE_URL,
        BACKDROP_SIZE,
        POSTER_SIZE
}