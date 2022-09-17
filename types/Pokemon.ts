interface Pokemon {
  id: Number;
  name: string; 
  types: Array<string>;
  sprite: string;
  /* If I declare it as `String` (with caps), 
    it throws an error when passing it to <image> src property.
    Yet my IDE tells me it's right. Why? */
}

export default Pokemon;