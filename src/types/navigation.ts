import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  PokemonList: undefined;
  PokemonDetails: { name: string };
};

export type RootStackScreenProps<RouteName extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, RouteName>;
