import MoviesList from "../components/MoviesList";
import { useState, useEffect } from "react";
import { getTrends } from "../services/tmdb";

const Trending = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getTrends();
  });


  return <MoviesList movies={movies} />
};

export default Trending;