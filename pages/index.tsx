import type { NextPage } from "next";
import type Pokemon from "../types/Pokemon";
import type Poke_Table from "../types/PokeTable";
import PokemonRow from "../components/PokemonRow";
import PokeTable from "../components/PokeTable";

const Home: NextPage = () => {
  const bulbasaur: Pokemon = {
    id: 1,
    name: "Bulbasaur",
    types: ["grass", "red", "green", "blue", "yellow"],
    sprite: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
  };

  const charmander: Pokemon = {
    id: 4,
    name: "Charmander",
    types: ["fire", "red", "green", "blue", "yellow"],
    sprite: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
  };

  const squirtle: Pokemon = {
    id: 4,
    name: "Squirtle",
    types: ["water", "red", "green", "blue", "yellow"],
    sprite: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
  };

  const pokeTable: Poke_Table = {
    pokeTable: [bulbasaur, charmander, squirtle],
  };

  return <PokeTable {...pokeTable} />;
};

export default Home;
