import axios from "axios";

export const getTrends = async () => {

  const URL = "https://api.themoviedb.org/3/discover/movie";
  const result = await axios(
    `${URL}?api_key=${process.env.REACT_APP_TMDB_TOKEN}`
  );
  return result;
};
