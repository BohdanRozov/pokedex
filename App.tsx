import "react-native-gesture-handler";
import "@theme/unistyles";

import { Provider as ReduxProvider } from "react-redux";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { RootNavigator } from "@routes";
import { store } from "@models";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ReduxProvider store={store}>
        <RootNavigator />
      </ReduxProvider>
    </GestureHandlerRootView>
  );
}
