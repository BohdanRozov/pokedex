import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PokeAPI } from "pokeapi-types";

export const pokeapi = createApi({
  reducerPath: "pokeapi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getLanguageById: builder.query<PokeAPI.Language, number>({
      query: (id) => `language/${id}`,
    }),
  }),
});

export const { useGetLanguageByIdQuery } = pokeapi;
