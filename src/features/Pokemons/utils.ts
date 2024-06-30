import { PokeAPI } from "pokeapi-types";

import { COLORS_BY_TYPE } from "@utils/colors";

export const mapPokemonFormsToPokemonListItem = (
  data?: PokeAPI.PokemonForm & { types: PokeAPI.PokemonType[] }
) => {
  const type =
    data?.types && data?.types?.length > 0
      ? data?.types?.[0].type.name
      : undefined;

  const backgroundColor = type ? COLORS_BY_TYPE[type] : "transparent";

  return {
    frontImageUrl: data?.sprites.front_default,
    backgroundColor,
  };
};

export const mapPokemonToPokemonDetails = (data?: PokeAPI.Pokemon) => {
  const type =
    data?.types && data?.types?.length > 0
      ? data?.types?.[0].type.name
      : undefined;

  const backgroundColor = type ? COLORS_BY_TYPE[type] : "transparent";

  return {
    frontImageUrl:
      data?.sprites?.other?.["showdown"]?.front_default ||
      data?.sprites?.front_default,
    backgroundColor,
    types: data?.types || [],
    bodyStats: [
      { key: "Weight", measure: "kg", value: (data?.weight || 0) / 10 },
      { key: "Height", measure: "m", value: (data?.height || 0) / 10 },
    ],
  };
};
