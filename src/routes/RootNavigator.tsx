import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import { RootStackParamList } from "@types";

import * as PokemonFeature from "@features/Pokemons/screens";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="PokemonList"
        component={PokemonFeature.PokemonList}
        options={{ title: "Pokedex" }}
      />

      <Stack.Screen
        name="PokemonDetails"
        component={PokemonFeature.PokemonDetails}
        options={{ title: "Pokemon Details" }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
