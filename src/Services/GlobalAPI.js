import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = '14cc20f28aa56d4a0779aa74cdf61938';

const getTrendingVideos = () => {
    return axios.get(`${movieBaseUrl}/trending/all/day?api_key=${api_key}`);
};

const getMovieByGenreId = (id) => {
    const movieByGenreBaseURL = `${movieBaseUrl}/discover/movie`;
    return axios.get(`${movieByGenreBaseURL}?api_key=${api_key}&with_genres=${id}`);
};

export default {
    getTrendingVideos,
    getMovieByGenreId
};
