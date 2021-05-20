const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const endpoints = {
  trending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  netflix_originals: `/discover/tv?api_key=${API_KEY}&language=en-US`,
  top_rated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
};

export default endpoints;
