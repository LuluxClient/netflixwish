import { useEffect, useState } from "react";
import { searchMovies } from "../services/tmdb";
const SearchMovie = () => {
  const [title, setTitle] = useState(<>Recherche...</>);
  const [search, setSearch] = useState("");
  

const handleSubmit = (e) => {
    e.preventDefault();
    // if (search.length > 0) {
      //Pour Luca du futur il faut que tu refasses ce système de con plus proprement et FoNcTiOnNeLlE
        alert("Recherche lancée pour " + search);
        setTitle(<h1>Recherche pour {search}</h1>);
        setSearch("");
    // } else {
    //     alert("Merci d'entrer un titre");
    // }
};

  const handleInputChange = (titleInput) => {
    setSearch(titleInput);
    console.log(titleInput);
  };

  return (
    <>
      {title}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="Rechercher un film"
          onChange={(e) => handleInputChange(e.target.value)}
        />
        <button type="submit">Rechercher</button>
      </form>
    </>
  );
};

export default SearchMovie;
