import type FilterPokeTableProps from "../types/FilterPokeTableProps";

import FilterablePokedexTable from "../components/FilterablePokedexTable";

function FromAPI(pokeTable: FilterPokeTableProps) {
  return (
    <>
      <FilterablePokedexTable {...pokeTable} />
    </>
  );
}

export const getServerSideProps = async (context: any) => {
  let _pokeTable: any = [];

  function parseData(res: any) {
    function getCleanArray() {
      let cleanArray: any[] = [];
      res.types.map((type: any) => {
        cleanArray.push(type.type.name);
      });
      return cleanArray;
    }

    _pokeTable.push({
      id: res.id,
      name: res.name,
      types: getCleanArray(),
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
