type PokemonTypeSelectionProps = {
  selectedType: string | undefined,
  selectType: (type: string | undefined) => void,
  allTypes: string[]
}

export default PokemonTypeSelectionProps;