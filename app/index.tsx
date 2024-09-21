import { View, ImageBackground, StatusBar } from "react-native";
import React from "react";
import bgimgnew from "@/assets/bgimgnews.jpg";
import { Href, useRouter } from "expo-router";
import AppGradient from "@/components/AppGradient";
import { useTranslation } from "react-i18next";
import CustomText from "@/atoms/CustomText";
import CustomTouchableOpacity from "@/atoms/CustomTouchableOpacity";

const App = () => {
  const router = useRouter();
  const { t } = useTranslation();
  return (
    <View className="flex-1">
      <ImageBackground source={bgimgnew} resizeMode="cover" className="flex-1">
        <AppGradient colors={["rgba(0,0,0,0.2)", "rgba(0,0,0,0.6)"]}>
          <View className="flex flex-1 mx-5 my-12 justify-between items-center">
            <View className="w-72 flex justify-center items-center">
              <CustomText preset="whiteHeading">
                {t("app.breaking_news_title")}
              </CustomText>
              <CustomText preset="whiteBody">{`${t(
                "app.breaking_news_info"
              )} 🙌`}</CustomText>
            </View>
            <CustomTouchableOpacity
              preset="default"
              onPress={() => router.push("/news-list" as Href)}
            >
              <CustomText preset="subheading">Get Started!</CustomText>
            </CustomTouchableOpacity>
            <StatusBar barStyle="light-content" />
          </View>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default App;
