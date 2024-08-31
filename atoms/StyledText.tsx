import { StyleSheet, Text, TextProps, TextStyle } from "react-native";
import React from "react";
import { useColorScheme } from "react-native";
import i18n from "@/assets/i18n/i18n";
import Colors from "@/constants/Colors";

type TextPreset = keyof typeof textStyling;

interface StyledTextProps extends TextProps {
  preset?: TextPreset;
}

const textStyling = StyleSheet.create({
  heading: { fontSize: 32, fontWeight: "bold" },
  subheading: { fontSize: 24, fontWeight: "bold", marginVertical: 4 },
  body: { fontSize: 16, fontWeight: "normal", marginVertical: 4 },
});

const StyledText = ({
  children,
  preset = "body",
  ...rest
}: StyledTextProps) => {
  const textDir: TextStyle =
    i18n.dir() === "ltr"
      ? { writingDirection: "ltr" }
      : { writingDirection: "rtl" };

  const textColor: TextStyle =
    useColorScheme() === "dark"
      ? { color: Colors.light }
      : { color: Colors.dark };

  const styles = [textStyling[preset], textDir, textColor];

  return (
    <Text style={styles} {...rest}>
      {children}
    </Text>
  );
};

export default StyledText;
