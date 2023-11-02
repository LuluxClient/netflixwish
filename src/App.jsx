import Navbar from "./components/Navbar";
import SearchMovie from "./pages/SearchMovie";
import Trending from "./pages/Trending";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ClassComponent from "./pages/ClassComponent";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Trending />} />
          <Route path="/search_movie" element={<SearchMovie />} />
          <Route path="/class_component" element={<ClassComponent/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
