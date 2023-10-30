import Navbar from "./components/Navbar";
import SearchMovie from "./pages/SearchMovie";
import Trending from "./pages/Trending";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Trending />} />
          <Route path="/search_movie" element={<SearchMovie />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
