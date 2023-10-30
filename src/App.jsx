import MoviesList from './components/MoviesList'

function App() {
  const moviesArray = ["Fast and furious", "Barbie", "Nemo"]
  return (
    <>
      <MoviesList movies={moviesArray}/>
    </>
  );
}

export default App;
