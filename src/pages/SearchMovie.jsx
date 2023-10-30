import { useState } from "react";
const SearchMovie = () => {
  const [title, setTitle] = useState(<>Recherche...</>);
  const [search, setSearch] = useState("");
  


  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Recherche lancée pour " + search);
    setTitle(<h1>Recherche pour {search}</h1>);
    setSearch();
  };

  const handleInputChange = (searchInput) => {
    setSearch(searchInput);
    console.log(searchInput);
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
