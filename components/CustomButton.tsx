import { Text, TouchableOpacity } from "react-native";
import React from "react";
import StyledText from "@/atoms/StyledText";

interface CustomButtonProps {
  onPress: () => void;
  title: string;
  containerStyles?: string;
}

const CustomButton = ({
  onPress,
  title,
  containerStyles = "",
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.6}
      className={`bg-primary rounded-xl min-h-[62px] justify-center items-center ${containerStyles}`}
    >
      <StyledText preset="subheading">{title}</StyledText>
    </TouchableOpacity>
  );
};

export default CustomButton;
