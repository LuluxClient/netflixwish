import MoviesList from './components/MoviesList'
import SearchMovie from './pages/SearchMovie';
import Trending from './pages/Trending';

function App() {
  return (
    <div className="App">
      <SearchMovie />
      <Trending />
    </div>
  );
}

export default App;
