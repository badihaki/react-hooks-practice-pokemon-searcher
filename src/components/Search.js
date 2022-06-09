import React from "react";

function Search({ searchPokemon, setSearchFunction }) {
  function handleSearch(e){
    setSearchFunction(e.target.value);
  }
  
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={handleSearch} value={searchPokemon} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
