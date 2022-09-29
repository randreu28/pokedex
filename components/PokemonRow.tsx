/* eslint-disable @next/next/no-img-element */
import type Pokemon from "../types/Pokemon";

function PokemonRow({ id, name, sprite, types }: Pokemon) {
  return (
    <>
      <div className="flex gap-5 p-5">
        <img
          className="w-64 h-64 bg-gray-200 rounded-lg p-5"
          alt=""
          src={sprite}
        />
        <div className="flex flex-col">
          <p className="text-gray-500">#{id.toString()}</p>
          <h1 className="text-2xl capitalize">{name}</h1>
          <div className="flex flex-row gap-2 flex-wrap max-w-xs">
            {types.map((type) => (
              <p
                key={type}
                className="rounded bg-gray-200 text-sm w-20 text-center px-3 py-1 mt-3 capitalize"
              >
                {type}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default PokemonRow;
