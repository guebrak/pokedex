import React from "react";
import PropTypes from "prop-types";


function PokemonCard({name,imgSrc}) {
     //const pokemon = pokemonList[0]

    return (
      <figure className="card">
        {imgSrc ? <img src={imgSrc} alt={name}
        className="card-img" /> : <p>???</p>}

        <figcaption>{name}</figcaption>
      </figure>
    );
}

 PokemonCard.PropTypes = {
    pokemonList: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }).isRequired).isRequired,
 }


  export default PokemonCard;