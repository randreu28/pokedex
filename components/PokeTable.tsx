import type Poke_Table from "../types/PokeTable";
import type { FC } from "react";
import PokemonRow from "./PokemonRow";

const PokeTable: FC<Poke_Table> = ({ pokeTable }) => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
        {pokeTable.map((row) => {
          return <PokemonRow {...row} key={row.id.toString()} />;
        })}
      </div>
    </>
  );
};

export default PokeTable;
