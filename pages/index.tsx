import type { NextPage } from "next";
import type Pokemon from "../types/Pokemon";
import PokemonRow from "../components/PokemonRow";

const Home: NextPage = () => {
  const bulbasaur: Pokemon = {
    id: 1,
    name: "Bulbasaur",
    types: ["grass"],
    sprite: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
  };

  return (
    <div className="h-screen flex">
      <div className="m-auto">
        <PokemonRow {...bulbasaur} />
      </div>
    </div>
  );
};

export default Home;
