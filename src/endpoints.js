const API_KEY = "d84914ecf5f237181a64c2570e83ec58";

const endpoints = {
  trending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  netflix_originals: `/discover/tv?api_key=${API_KEY}&language=en-US`,
  top_rated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
};

export default endpoints;
