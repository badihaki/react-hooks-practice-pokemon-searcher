import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const api = "http://localhost:3001/pokemon";
  const [pokemon, setPokcketMonesters] = useState([]);

  useEffect( ()=>{
    fetch(api).then((r) => r.json()).then( (data) => {
      setPokcketMonesters(data);
    })
  }, [])

  function addPokemon(newPokemon){
    fetch(api,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPokemon),
    }).then( (r)=> r.json()).then( (data)=>{
      const newPokemonList = [...pokemon, data];
      setPokcketMonesters(newPokemonList);

    })
  }

  const [searchPokemon, setSearch] = useState("");

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addPokemonFunction={addPokemon} />
      <br />
      <Search searchPokemon={searchPokemon} setSearchFunction={setSearch} />
      <br />
      <PokemonCollection pokemon={pokemon} searchPokemon={searchPokemon} />
    </Container>
  );
}

export default PokemonPage;
