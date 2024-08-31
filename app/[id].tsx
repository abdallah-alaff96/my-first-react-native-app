import { View, Text, Pressable, useColorScheme } from "react-native";
import React from "react";
import { router, useLocalSearchParams } from "expo-router";
import AppGradient from "@/components/AppGradient";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useTranslation } from "react-i18next";
import i18n from "@/assets/i18n/i18n";
import Colors from "@/constants/Colors";
import StyledText from "@/atoms/StyledText";

const Details = () => {
  const theme = useColorScheme();
  const { author, title } = useLocalSearchParams();
  const { t } = useTranslation();

  return (
    <View className="flex-1">
      <AppGradient
        colors={[theme === "dark" ? Colors.dark : Colors.light, Colors.primary]}
      >
        <View className="p-5 flex items-center">
          <Pressable
            onPress={() => router.back()}
            className={`absolute top-4 z-10 ${
              i18n.dir() === "ltr" ? "left-5" : "right-5 rotate-180"
            }`}
          >
            <AntDesign
              name="leftcircle"
              size={50}
              color={theme === "dark" ? Colors.light : Colors.dark}
            />
          </Pressable>
          <StyledText preset="heading">{t("details.details_title")}</StyledText>
        </View>
        <View className="p-5">
          <StyledText preset="subheading">{`${t(
            "details.author"
          )}: ${author}`}</StyledText>
          <StyledText preset="body">{`${t(
            "details.description"
          )}: ${title}`}</StyledText>
        </View>
      </AppGradient>
    </View>
  );
};

export default Details;
