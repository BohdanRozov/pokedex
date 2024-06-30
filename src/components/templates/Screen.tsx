import { PropsWithChildren } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

type ScreenProps = { style?: ViewStyle };

export const Screen = ({ children, style }: PropsWithChildren<ScreenProps>) => {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={StyleSheet.compose(styles.container, style)}>{children}</View>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  container: { flex: 1, backgroundColor: theme.colors.background },
}));
