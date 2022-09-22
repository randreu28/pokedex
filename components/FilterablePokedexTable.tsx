import type PokeTableProps from "../types/PokeTableProps";
import type FilterPokeTableProps from "../types/FilterPokeTableProps";

import PokeTable from "./PokeTable";
import PokemonTypeSelection from "./PokemonTypeSelection";
import { useState } from "react";
import Pokemon from "../types/Pokemon";
import PokemonTypeSelectionProps from "../types/PokemonTypeSelectionProps";

function FilterablePokedexTable(pokeTable: FilterPokeTableProps) {
  const [selected, setSelected] = useState<string | undefined>(undefined);

  const filterData = () => {
    if (!selected) {
      return pokeTable.pokeTable;
    } else {
      return pokeTable.pokeTable.filter((pokemon: Pokemon) =>
        pokemon.types.some((pokemon) => pokemon == selected)
      );
    }
  };

  const getTypes = () => {
    const allTypes: any[] = [];

    allTypes.push(undefined);

    pokeTable.pokeTable.map((pokemon) => {
      pokemon.types.map((type) => {
        if (!(allTypes.indexOf(type) > -1)) {
          allTypes.push(type);
        }
      });
    });

    return allTypes;
  };

  const PokemonTypeSelectionProps: PokemonTypeSelectionProps = {
    selectedType: selected,
    selectType: setSelected,
    allTypes: getTypes(),
  };

  const filteredTable: PokeTableProps = {
    pokeTable: filterData(),
    allTypes: getTypes(),
  };

  return (
    <>
      <PokemonTypeSelection {...PokemonTypeSelectionProps} />
      <PokeTable {...filteredTable} />
    </>
  );
}
export default FilterablePokedexTable;
