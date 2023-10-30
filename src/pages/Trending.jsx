import MoviesList from "../components/MoviesList";
import { useState, useEffect } from "react";
import { getTrends } from "../services/tmdb";


const Trending = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrends().then((movies) => {
      setMovies(movies);
    });
  },[]);
  
  return <MoviesList movies={movies} />
};

export default Trending;