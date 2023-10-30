import MoviesList from './components/MoviesList'
import SearchMovie from './pages/SearchMovie';
import Trending from './pages/Trending';

function App() {
  const moviesArray = ["Fast and furious", "Barbie", "Nemo"]
  return (
    <div className="App">
      <SearchMovie />
      {/* <Trending /> */}
      <MoviesList movies={moviesArray}/>
    </div>
  );
}

export default App;
