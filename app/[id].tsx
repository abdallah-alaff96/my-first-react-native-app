import { View, Text, Pressable } from "react-native";
import React from "react";
import { router, useLocalSearchParams } from "expo-router";
import AppGradient from "@/components/AppGradient";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useTranslation } from "react-i18next";
import i18n from "@/assets/i18n/i18n";

const Details = () => {
  const { author, title } = useLocalSearchParams();
  const { t } = useTranslation();
  // console.log(author);

  return (
    <View className="flex-1">
      <AppGradient colors={["#ff5f6d", "#d32f2f"]}>
        <View className="p-5">
          <Pressable
            onPress={() => router.back()}
            className={`absolute top-4 z-10 ${
              i18n.dir() === "ltr" ? "left-5" : "right-5 rotate-180"
            }`}
          >
            <AntDesign name="leftcircle" size={50} color="black" />
          </Pressable>
          <Text className="text-gray-200 font-bold text-4xl text-center">
            {t("details.details_title")}
          </Text>
        </View>
        <View className="p-5">
          <Text
            className={`text-white text-2xl font-bold ${
              i18n.dir() === "ltr" ? "text-left" : "text-right"
            }`}
          >{`${t("details.author")}: ${author}`}</Text>
          <Text
            className={`text-white text-lg mt-4 ${
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
