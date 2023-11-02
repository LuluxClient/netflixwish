import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to={"/"}>Trending</Link>{" "}
      <Link to={"/search_movie"}>Recherche</Link>
      <Link to={"/movie_editor"}>Movie Editor</Link>
    </nav>
  );
};

export default Navbar;
