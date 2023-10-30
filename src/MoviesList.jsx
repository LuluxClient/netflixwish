const MoviesList = ( {movies} ) => {
    return(
        <>
          <h2>My List</h2>
          <ul>
            {
              movies.map((movie) => (
                <li>{movie}</li>
              ))
            }
          </ul>
        </>
    )
}
export default MoviesList;