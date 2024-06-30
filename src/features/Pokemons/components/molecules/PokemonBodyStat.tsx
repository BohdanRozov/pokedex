import { View } from "react-native";

import { BodyStat } from "../../types";

import { Typography } from "@components/atoms";

type Props = { item: BodyStat };

export const PokemonBodyStat = ({ item }: Props) => (
  <View>
    <Typography>
      {item.key}: {item.value} {item.measure}
    </Typography>
  </View>
);
