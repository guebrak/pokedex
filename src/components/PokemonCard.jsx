function PokemonCard(props) {
    // const pokemon = pokemonList[0]

    return (
      <figure className="card">
        {props .imgSrc ? <img src={props.imgSrc} alt={props.name}
        className="card-img" /> : <p>???</p>}

        <figcaption>{props.name}</figcaption>
      </figure>
    );
}
  


  export default PokemonCard;