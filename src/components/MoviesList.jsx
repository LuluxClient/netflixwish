import Screenshot from "../assets/test.png";

const MoviesList = ({ url, movies }) => {

  return (
    <div>
      <h2 className="special-title">My List</h2>
      <ul>
        {movies.map((movie, key) => (
          <li key={key}>
            <p>{movie.title}</p>
            <img
              className="movie-miniature"
              src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`}
              // /t/p/w220_and_h330_face/tEY81I7lpiHaLJa7AZ3O4vWXmJo.jpg
              alt="movie illustration"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;