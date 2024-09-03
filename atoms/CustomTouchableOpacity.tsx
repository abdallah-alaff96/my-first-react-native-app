import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import React from "react";
import Colors from "@/constants/Colors";

type TouchableOpacityPreset = keyof typeof touchableOpacityStyling;

interface CustomTouchableOpacityProps extends TouchableOpacityProps {
  preset: TouchableOpacityPreset;
}

const touchableOpacityStyling = StyleSheet.create({
  default: {
    minHeight: 62,
    borderRadius: 12,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    width: "auto",
    paddingHorizontal: 80,
  },
});

const CustomTouchableOpacity = ({
  children,
  preset = "default",
  ...reset
}: CustomTouchableOpacityProps) => {
  return (
    <TouchableOpacity
      style={[touchableOpacityStyling[preset]]}
      activeOpacity={0.6}
      {...reset}
    >
      {children}
    </TouchableOpacity>
  );
};

export default CustomTouchableOpacity;
