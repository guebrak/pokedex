import propType from "prop-type";
import { checkPropTypes } from "prop-types";

function PokemonCard(props) {
     //const pokemon = pokemonList[0]

    return (
      <figure className="card">
        {props .imgSrc ? <img src={props.imgSrc} alt={props.name}
        className="card-img" /> : <p>???</p>}

        <figcaption>{props.name}</figcaption>
      </figure>
    );
}

 PokemonCard.propTypes = {
    pokemonList: PropTypes.arrayOf(PropTypes.string).shape({
    name: PropTypes.String.isRequired,
    imgSrc: PropTypes.string,
  }.isRequired).isRequired,
 }


  export default PokemonCard;