import { useMemo } from "react";
import { View } from "react-native";
import { PokeAPI } from "pokeapi-types";
import {
  createStyleSheet,
  useStyles,
  UnistylesRuntime,
} from "react-native-unistyles";
import { Image } from "expo-image";

import { useGetPokemonFormsByNameQuery } from "@models";
import { capitalizeFirstLetter } from "@utils/strings";
import { mapPokemonFormsToPokemonListItem } from "../../utils";

import { Typography } from "@components/atoms";

type Props = { pokemonResource: PokeAPI.NamedAPIResource };

export const PokemonListItem = ({ pokemonResource: { name } }: Props) => {
  const { styles } = useStyles(stylesheet);
  const { data } = useGetPokemonFormsByNameQuery(name);

  const { frontImageUrl, backgroundColor } = useMemo(() => {
    return mapPokemonFormsToPokemonListItem(data);
  }, [data]);

  return (
    <View style={[styles.container, { backgroundColor }]}>
      {frontImageUrl ? (
        <Image
          style={{ height: 100, width: 100 }}
          source={{ uri: frontImageUrl }}
        />
      ) : (
        <View style={{ height: 100, width: 100 }} />
      )}
      <Typography color="white">{capitalizeFirstLetter(name)}</Typography>
    </View>
  );
};

const stylesheet = createStyleSheet((theme) => {
  const containerSize = Math.min(UnistylesRuntime.screen.width * 0.4, 200);
  return {
    container: {
      height: containerSize,
      width: containerSize,
      borderWidth: 1,
      borderRadius: 16,
      justifyContent: "center",
      alignItems: "center",
      gap: theme.margins.s,
    },
  };
});
