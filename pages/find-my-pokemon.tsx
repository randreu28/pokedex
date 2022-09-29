import { useState } from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

import type PokeIdentity from "../types/PokeIdentity";
import type Pokemon from "../types/Pokemon";

function FindMyPokemon(data: { pokemonList: PokeIdentity[] }) {
  const [pokemon, setPokemon] = useState<null | Pokemon>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function showPokemon(pokeIdentity: PokeIdentity) {
    setIsLoading(true);

    function getCleanArray({ res }: any) {
      let cleanArray: any[] = [];
      res.types.map((type: any) => {
        cleanArray.push(type.type.name);
      });
      return cleanArray;
    }

    const rawRes = await fetch(pokeIdentity.url);
    const res = await rawRes.json();

    await setPokemon({
      id: res.id,
      name: res.name,
      types: getCleanArray({ res }),
      sprite: res.sprites.other["official-artwork"].front_default,
    });

    await setIsLoading(false);
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
