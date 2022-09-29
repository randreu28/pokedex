import type FilterPokeTableProps from "../types/FilterPokeTableProps";

import FilterablePokedexTable from "../components/FilterablePokedexTable";
import ApiParams from "../components/ApiParams";
import getCleanArray from "../helpers/getCleanArray";

function FromAPI(pokeTable: FilterPokeTableProps) {
  return (
    <>
      <ApiParams />
      <FilterablePokedexTable {...pokeTable} />
    </>
  );
}

export const getServerSideProps = async (context: any) => {
  let _pokeTable: any = [];

  function parseData(res: any) {
    _pokeTable.push({
      id: res.id,
      name: res.name,
      types: getCleanArray({ res }),
      sprite: res.sprites.other["official-artwork"].front_default,
    });
  }

  const start = context?.query?.start ? parseInt(context.query.start) : 1;

  const end = context?.query?.end ? parseInt(context.query.end) : 18;

  for (let i = start; i <= end; i++) {
    const rawRes = await fetch("https://pokeapi.co/api/v2/pokemon/" + i);
    const res = await rawRes.json();
    await parseData(res);
  }

  const pokeTable: FilterPokeTableProps = {
    pokeTable: _pokeTable,
  };

  return {
    props: pokeTable,
  };
};

export default FromAPI;
