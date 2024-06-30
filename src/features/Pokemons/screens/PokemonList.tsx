import { useCallback } from "react";
import {
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  View,
} from "react-native";
import { PokeAPI } from "pokeapi-types";
import { createStyleSheet, useStyles } from "react-native-unistyles";

import { RootStackScreenProps } from "@types";
import { useGetAllPokemonsQuery } from "@models";

import { Typography } from "@components/atoms";
import { PokemonListItem } from "../components/organisms";
import { Screen } from "@components/templates";

export const PokemonList = ({
  navigation,
}: RootStackScreenProps<"PokemonList">) => {
  const { styles } = useStyles(stylesheet);
  const { data, isLoading, error } = useGetAllPokemonsQuery(undefined);

  const keyExtractor = useCallback(
    (item: PokeAPI.NamedAPIResource) => item.url,
    []
  );

  const renderItem = useCallback(
    ({ item }: { item: PokeAPI.NamedAPIResource }) => {
      const onPokemonPress = () =>
        navigation.navigate("PokemonDetails", {
          name: item.name,
        });

      return (
        <TouchableOpacity onPress={onPokemonPress}>
          <PokemonListItem pokemonResource={item} />
        </TouchableOpacity>
      );
    },
    []
  );

  const emptyComponent = error ? (
    <Typography>{error?.toString()}</Typography>
  ) : (
    <Typography>No Pokemon found</Typography>
  );

  return (
    <Screen>
      {isLoading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <FlatList
          numColumns={2}
          initialNumToRender={10}
          maxToRenderPerBatch={10}
          windowSize={10}
          style={styles.list}
          contentContainerStyle={styles.listContent}
          columnWrapperStyle={styles.listColumnWrapperStyle}
          data={data?.results}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          ListEmptyComponent={emptyComponent}
          showsVerticalScrollIndicator={false}
        />
      )}
    </Screen>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  loaderContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  list: { flex: 1 },
  listContent: {
    paddingVertical: theme.margins.m,
    gap: theme.margins.m,
    alignItems: "center",
  },
  listColumnWrapperStyle: { gap: theme.margins.m },
}));
