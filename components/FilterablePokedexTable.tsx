import type PokeTableProps from "../types/PokeTableProps";
import PokeTable from "./PokeTable";
import PokemonTypeSelection from "./PokemonTypeSelection";
import { useState } from "react";
import Pokemon from "../types/Pokemon";

function FilterablePokedexTable(pokeTable: PokeTableProps) {
  const [selected, setSelected] = useState<string | undefined>(undefined);

  const PokemonTypeSelectionProps = {
    selectedType: selected,
    selectType: setSelected,
  };

  const filterData = () => {
    if (!selected) {
      return pokeTable.pokeTable;
    } else {
      return pokeTable.pokeTable.filter((pokemon: Pokemon) =>
        pokemon.types.some((pokemon) => pokemon == selected)
      );
    }
  };

  const filteredTable: PokeTableProps = {
    pokeTable: filterData(),
  };

  return (
    <>
      <PokemonTypeSelection {...PokemonTypeSelectionProps} />
      <PokeTable {...filteredTable} />
    </>
  );
}
export default FilterablePokedexTable;
