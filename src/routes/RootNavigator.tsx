import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import { PokemonList } from "@features/Pokemons/screens";

const Stack = createNativeStackNavigator();

export const RootNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={PokemonList} />
    </Stack.Navigator>
  </NavigationContainer>
);
