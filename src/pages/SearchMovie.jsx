import { useState } from "react";
const SearchMovie = () => {
    
  const [search, setSearch] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Recherche lancée pour " + search);
    setSearch();
  };

  const handleInputChange = (input) => {
    setSearch(input);
    console.log(input);
  };

  return (
    <>
      <h1>Recherche</h1>
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
