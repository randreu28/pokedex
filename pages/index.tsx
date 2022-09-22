import type { NextPage } from "next";
import type Pokemon from "../types/Pokemon";
import type FilterPokeTableProps from "../types/FilterPokeTableProps";

import FilterablePokedexTable from "../components/FilterablePokedexTable";

const bulbasaur: Pokemon = {
  id: 1,
  name: "Bulbasaur",
  types: ["grass", "poison"],
  sprite: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
};

const charmander: Pokemon = {
  id: 4,
  name: "Charmander",
  types: ["fire", "normal"],
  sprite: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
};

const squirtle: Pokemon = {
  id: 7,
  name: "Squirtle",
  types: ["water"],
  sprite: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
};

const caterpie: Pokemon = {
  id: 10,
  name: "Caterpie",
  types: ["grass", "normal"],
  sprite: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png",
};

const pokeTable: FilterPokeTableProps = {
  pokeTable: [bulbasaur, charmander, squirtle, caterpie],
};

const Home: NextPage = () => {
  return (
    <>
      <FilterablePokedexTable {...pokeTable} />
    </>
  );
};

export default Home;
