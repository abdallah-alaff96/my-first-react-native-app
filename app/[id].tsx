import { View, Text, Pressable, useColorScheme } from "react-native";
import React from "react";
import { router, useLocalSearchParams } from "expo-router";
import AppGradient from "@/components/AppGradient";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useTranslation } from "react-i18next";
import i18n from "@/assets/i18n/i18n";
import Colors from "@/constants/Colors";

const Details = () => {
  const theme = useColorScheme();
  const { author, title } = useLocalSearchParams();
  const { t } = useTranslation();

  return (
    <View className="flex-1">
      <AppGradient
        colors={[theme === "dark" ? Colors.dark : Colors.light, Colors.primary]}
      >
        <View className="p-5">
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
          <Text
            className={`${
              theme === "dark" ? "text-light" : "text-dark"
            } font-bold text-4xl text-center`}
          >
            {t("details.details_title")}
          </Text>
        </View>
        <View className="p-5">
          <Text
            className={`${
              theme === "dark" ? "text-light" : "text-dark"
            } text-2xl font-bold ${
              i18n.dir() === "ltr" ? "text-left" : "text-right"
            }`}
          >{`${t("details.author")}: ${author}`}</Text>
          <Text
            className={`${
              theme === "dark" ? "text-light" : "text-dark"
            } text-lg mt-4 ${
              i18n.dir() === "ltr" ? "text-left" : "text-right"
            }`}
          >
            {`${t("details.description")}: ${title}`}
          </Text>
        </View>
      </AppGradient>
    </View>
  );
};

export default Details;
