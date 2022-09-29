/* eslint-disable @next/next/no-img-element */
import Pokemon from "../types/Pokemon";

function PokeStandAlone(pokemon: Pokemon | null) {
  if (pokemon?.id) {
    return (
      <div className="h-[calc(100vh-300px)] flex">
        <div className="m-auto flex gap-5">
          <img
            className="bg-gray-200 rounded-lg p-5"
            alt=""
            src={pokemon.sprite}
          />
          <div className="flex flex-col">
            <p className="text-gray-500">#{pokemon.id.toString()}</p>
            <h1 className="text-4xl">{pokemon.name}</h1>
            <div className="flex flex-row gap-2 flex-wrap max-w-xs">
              {pokemon.types.map((type) => (
                <p
                  key={type}
                  className="rounded bg-gray-200 text-lg w-20 text-center px-3 py-1 mt-3"
                >
                  {type}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="h-[calc(100vh-300px)] my-auto flex">
        <div className="m-auto text-gray-500 space-y-5 text-3xl">
          <h1>No pokemon found</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-14 h-14 mx-auto"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
      </div>
    );
  }
}

export default PokeStandAlone;
