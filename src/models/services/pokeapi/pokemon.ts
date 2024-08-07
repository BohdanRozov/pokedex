import { PokeAPI } from "pokeapi-types";

import { PaginatedRequest } from "@types";
import { pokeapi } from "./pokeapi";

export const pokemonApi = pokeapi.injectEndpoints({
  endpoints: (builder) => ({
    getAllPokemons: builder.query<PokeAPI.NamedAPIResourceList, undefined>({
      query: (params) => ({ url: "pokemon", params: { limit: 151 } }),
    }),
    getPokemonsPaginated: builder.query<
      PokeAPI.NamedAPIResourceList,
      PaginatedRequest
    >({
      query: (params) => ({ url: "pokemon", params }),
    }),
    getPokemonFormsByName: builder.query<
      PokeAPI.PokemonForm & { types: PokeAPI.PokemonType[] },
      string
    >({
      query: (name) => `pokemon-form/${name}`,
    }),
    getPokemonByName: builder.query<PokeAPI.Pokemon, string>({
      query: (name) => `pokemon/${name}`,
    }),
  }),
});

export const {
  useGetAllPokemonsQuery,
  useGetPokemonsPaginatedQuery,
  useGetPokemonFormsByNameQuery,
  useGetPokemonByNameQuery,
} = pokemonApi;
