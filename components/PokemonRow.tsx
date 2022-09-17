/* eslint-disable @next/next/no-img-element */
import type { FC } from "react";
import type Pokemon from "../types/Pokemon";

const PokemonRow: FC<Pokemon> = ({ id, name, sprite, types }) => {
  return (
    <>
      <div className="space-y-3">
        <img
          className="w-64 h-64 bg-gray-200 rounded-lg p-5"
          alt=""
          src={sprite}
        />
        <p className="text-gray-500">#{id.toString()}</p>
        <h1 className="text-2xl">{name}</h1>
        <p className="rounded bg-gray-200 text-sm w-20 text-center px-3 py-1">
          {types}
        </p>
      </div>
    </>
  );
};

export default PokemonRow;
