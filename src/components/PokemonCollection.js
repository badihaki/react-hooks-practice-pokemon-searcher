import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemon, searchPokemon }) {
  const filteredPokemon = pokemon.filter( (pocketMonster)=>{
    return pocketMonster.name.toLowerCase().includes(searchPokemon);
  })
  
  const pokeCards = filteredPokemon.map( (pocketMonster) => {
    return (
      <PokemonCard key={pocketMonster.id} pokemon={pocketMonster} />
      );
    })
    
  return (
    <Card.Group itemsPerRow={6}>
      {pokeCards}
    </Card.Group>
  );
}

export default PokemonCollection;
