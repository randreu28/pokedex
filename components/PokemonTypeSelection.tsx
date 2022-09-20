import type PokemonTypeSelectionProps from "../types/PokemonTypeSelectionProps";

const pokemonTypes: (string | undefined)[] = [
  undefined,
  "grass",
  "fire",
  "water",
  "normal",
];

function PokemonTypeSelection({
  selectType,
  selectedType,
}: PokemonTypeSelectionProps) {
  return (
    <div className="flex gap-5 pt-5 justify-center mx-auto w-full flex-wrap max-w-xl">
      {pokemonTypes.map((type: string | undefined, id: number) => {
        return (
          <button
            key={id}
            className={`bg-gray-200 rounded p-2 ${
              selectedType == type ? "bg-gray-300" : "bg-gray-200"
            }`}
            onClick={() => {
              selectType(type);
            }}
          >
            {type ? type.toString() : "any"}
          </button>
        );
      })}
    </div>
  );
}
export default PokemonTypeSelection;
