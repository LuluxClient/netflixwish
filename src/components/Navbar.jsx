import { Link } from "react-router-dom";
import { useAtom } from "jotai";
import { userAtom } from "../utils/globalState";

const Navbar = () => {
  const [user] = useAtom(userAtom);
  return (
    <nav>
      <Link to={"/"}>Trending</Link>{" "}
      <Link to={"/search_movie"}>Recherche</Link>
      <Link to={"/movie_editor"}>Movie Editor</Link>
      <p>{user.name} : {user.passion}</p>
    </nav>
  );
};

export default Navbar;
