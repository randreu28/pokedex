import type Poke_Table from "../types/PokeTable";
import type { FC } from "react";
import PokemonRow from "./PokemonRow";

const PokeTable: FC<Poke_Table> = ({ pokeTable }) => {
  return (
    <>
      <div className="grid grid-cols-3">
        <PokemonRow {...pokeTable[0]} />
        <PokemonRow {...pokeTable[1]} />
        <PokemonRow {...pokeTable[2]} />
      </div>
    </>
  );
};

export default PokeTable;
