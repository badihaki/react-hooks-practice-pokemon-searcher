import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {
  const [frontSide, setFrontSide] = useState(true);
  
  function handleCardClick(){
    setFrontSide(!frontSide);
  }

  return (
    <Card onClick={handleCardClick}>
      <div>
        <div className="image">
          <img alt={pokemon.name} src={frontSide? pokemon.sprites.front : pokemon.sprites.back } />
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
