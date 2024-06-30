import { View } from "react-native";
import { PokeAPI } from "pokeapi-types";

import { COLORS_BY_TYPE } from "@utils/colors";
import { capitalizeFirstLetter } from "@utils/strings";

import { Typography } from "@components/atoms";

type Props = { item: PokeAPI.PokemonType };

export const PokemonType = ({ item }: Props) => (
  <View
    style={{
      paddingVertical: 4,
      paddingHorizontal: 16,
      borderRadius: 16,
      backgroundColor: COLORS_BY_TYPE[item.type.name] || "transparent",
    }}
  >
    <Typography color="white">
      {capitalizeFirstLetter(item.type.name)}
    </Typography>
  </View>
);
