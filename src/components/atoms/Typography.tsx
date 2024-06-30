import { Text, TextProps } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

type TypographyProps = { variant?: "b1"; color?: "error" };

export const Typography = ({
  variant = "b1",
  color,
  style,
  ...props
}: TypographyProps & TextProps) => {
  const { styles } = useStyles(stylesheet, { variant, color });

  return <Text style={styles.text} {...props}></Text>;
};

const stylesheet = createStyleSheet((theme) => ({
  text: {
    variants: {
      variant: {
        default: { fontSize: 16, lineHeight: 18 },
        b1: { fontSize: 16, lineHeight: 18 },
      },
      color: {
        default: { color: theme.colors.typography },
        error: { color: theme.colors.error },
      },
    },
  },
}));
