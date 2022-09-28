import type PokeIdentity from "../types/PokeIdentity";

import { ReactSearchAutocomplete } from "react-search-autocomplete";
function FindMyPokemon(data: { pokemonList: PokeIdentity[] }) {
  function showPokemon() {
    alert("funciona");
  }
  return (
    <>
      <div className="p-5 w-96 mx-auto">
        <ReactSearchAutocomplete
          items={data.pokemonList}
          onSelect={showPokemon}
        />
      </div>
      <h1 className="text-center p-2">(Here show pokemon)</h1>
    </>
  );
}

export const getServerSideProps = async () => {
  let pokemonList: PokeIdentity[] = [];

  function parseData(rawData: any) {
    rawData.results.map((pokemon: any, id: number) => {
      let newPokemon: PokeIdentity = {
        id: id,
        name: pokemon.name,
        url: pokemon.url,
      };
      pokemonList.push(newPokemon);
    });
  }

  const rawRes = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
  );
  const res = await rawRes.json();
  await parseData(res);

  return {
    props: { pokemonList },
  };
};

export default FindMyPokemon;
