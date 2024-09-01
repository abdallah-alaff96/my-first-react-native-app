import { Pressable, PressableProps, StyleSheet } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";

type PressablePreset = keyof typeof pressableStyling;

interface CustomPressableProps extends PressableProps {
  preset: PressablePreset;
}

const pressableStyling = StyleSheet.create({
  default: {
    height: "auto",
    borderRadius: 16,
    overflow: "hidden",
    marginVertical: 12,
    padding: 16,
    backgroundColor: Colors.primary,
    borderWidth: 2,
    borderColor: Colors.light,
  },
  centered: {
    // contain default + center styling
    height: "auto",
    borderRadius: 16,
    overflow: "hidden",
    marginVertical: 12,
    padding: 16,
    backgroundColor: Colors.primary,
    borderWidth: 2,
    borderColor: Colors.dark,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
});

const CustomPressable = ({
  children,
  preset = "default",
  ...reset
}: CustomPressableProps) => {
  return (
    <Pressable style={[pressableStyling[preset]]} {...reset}>
      {children}
    </Pressable>
  );
};

export default CustomPressable;
