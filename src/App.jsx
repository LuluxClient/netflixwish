import Navbar from "./components/Navbar";
import SearchMovie from "./pages/SearchMovie";
import Trending from "./pages/Trending";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ClassComponent from "./pages/ClassComponent";
import { Provider } from "react-redux";
import store from "./redux/store";
import MovieEditor from "./pages/MovieEditor";
import Profile from "./pages/Profile";

function App() {
  return (
    <div>
      <Router>
        <Provider store ={store}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Trending />} />
          <Route path="/search_movie" element={<SearchMovie />} />
          <Route path="/class_component" element={<ClassComponent/>} />
          <Route path="/movie_editor" element={<MovieEditor/>} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
        </Provider>
      </Router>
    </div>
  );
}

export default App;
