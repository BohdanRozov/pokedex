import { useCallback } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import { PokeAPI } from "pokeapi-types";

import { useGetAllPokemonsQuery } from "@models";

import { Typography } from "@components/atoms";
import { Screen } from "@components/templates";
import { createStyleSheet, useStyles } from "react-native-unistyles";

export const PokemonList = () => {
  const { styles } = useStyles(stylesheet);

  const { data, isLoading, error } = useGetAllPokemonsQuery(undefined);

  const renderItem = useCallback(
    ({ item: pokemon }: { item: PokeAPI.NamedAPIResource }) => {
      return <Typography>{pokemon.name}</Typography>;
    },
    []
  );

  return (
    <Screen>
      <Typography>Pokemon List</Typography>
      {isLoading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <FlatList
          style={styles.pokemonList}
          contentContainerStyle={styles.pokemonListContent}
          data={data?.results}
          renderItem={renderItem}
          ListEmptyComponent={
            error ? (
              <Typography>{error?.toString()}</Typography>
            ) : (
              <Typography>No Pokemon found</Typography>
            )
          }
        />
      )}
    </Screen>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  loaderContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  pokemonList: { flex: 1 },
  pokemonListContent: { paddingBottom: theme.margins.xl },
}));
