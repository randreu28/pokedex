import type FilterPokeTableProps from "../types/FilterPokeTableProps";
import FilterablePokedexTable from "../components/FilterablePokedexTable";

function FromAPI(pokeTable: FilterPokeTableProps) {
  return (
    <>
      <FilterablePokedexTable {...pokeTable} />
    </>
  );
}

export const getStaticProps = async () => {
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

  for (let i = 1; i <= 18; i++) {
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
