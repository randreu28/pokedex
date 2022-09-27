import type PokeTableProps from "../types/PokeTableProps";
import PokemonRow from "./PokemonRow";

function PokeTable({ pokeTable }: PokeTableProps) {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 container mx-auto">
        {pokeTable.map((row) => {
          return <PokemonRow {...row} key={row.id.toString()} />;
        })}
      </div>
    </>
  );
}

export default PokeTable;
