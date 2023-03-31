
import './App.css'
import PokemonCard from './components/PokemonCard'
import { useState } from "react";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

function App() {
  const [count, setCount] = useState(0);

  const handleClickNext = () => {
    setCount(count + 1)
  }
  const handleClickPrev = () => {
    setCount(count - 1)
  }

  

  return (
      <div>
       <PokemonCard name={pokemonList[count].name} imgSrc={pokemonList[count].imgSrc}/>
       <button onClick={handleClickPrev}>prev</button>
       <button onClick={handleClickNext}>next</button>
    </div>
  )
}



export default App
