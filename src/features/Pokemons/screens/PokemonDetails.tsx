import { useCallback, useMemo } from "react";
import { ActivityIndicator, View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { Image } from "expo-image";
import { PokeAPI } from "pokeapi-types";

import { RootStackScreenProps } from "@types";
import { useGetPokemonByNameQuery } from "@models";
import { capitalizeFirstLetter } from "@utils/strings";
import { mapPokemonToPokemonDetails } from "../utils";
import { BodyStat } from "../types";

import { Typography } from "@components/atoms";
import { PokemonType, PokemonBodyStat } from "../components/molecules";
import { Screen } from "@components/templates";

export const PokemonDetails = ({
  route: {
    params: { name },
  },
}: RootStackScreenProps<"PokemonDetails">) => {
  const { styles } = useStyles(stylesheet);
  const { data, error, isLoading, isError } = useGetPokemonByNameQuery(name);

  const details = useMemo(() => {
    return mapPokemonToPokemonDetails(data);
  }, [data]);

  const renderType = useCallback(
    (item: PokeAPI.PokemonType) => <PokemonType item={item} />,
    []
  );

  const renderBodyStat = useCallback(
    (item: BodyStat) => <PokemonBodyStat item={item} />,
    []
  );

  if (isError) {
    return (
      <View style={styles.container}>
        <Typography color="error">
          {error?.toString() || "Something went wrong"}
        </Typography>
      </View>
    );
  }

  if (!data || isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <Screen>
      <View
        style={[
          styles.header,
          {
            backgroundColor: details.backgroundColor,
          },
        ]}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Typography color="white">{capitalizeFirstLetter(name)}</Typography>
          <Typography color="white">#{data?.id}</Typography>
        </View>
        <View style={{ alignSelf: "center" }}>
          {details.frontImageUrl ? (
            <Image
              style={{ height: 150, width: 150 }}
              source={{ uri: details.frontImageUrl }}
              contentFit="contain"
            />
          ) : (
            <View style={{ height: 150, width: 150 }} />
          )}
        </View>
      </View>
      <View style={styles.content}>
        <View style={{ flexDirection: "row", gap: 24 }}>
          {details.types.map(renderType)}
        </View>
        <Typography>About</Typography>
        {details.bodyStats.map(renderBodyStat)}
      </View>
    </Screen>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  screen: { padding: theme.margins.m },
  header: {
    paddingTop: theme.margins.m,
    paddingHorizontal: theme.margins.m,
    paddingBottom: theme.margins.l * 2,
  },
  content: {
    flex: 1,
    backgroundColor: "white",
    borderTopStartRadius: theme.margins.l,
    borderTopEndRadius: theme.margins.l,
    top: -theme.margins.l,
    paddingTop: theme.margins.l,
    alignItems: "center",
    gap: theme.margins.m,
  },
}));
