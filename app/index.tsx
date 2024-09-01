import { View, ImageBackground, StatusBar } from "react-native";
import React from "react";
import bgimgnew from "@/assets/bgimgnews.jpg";
import { Href, useRouter } from "expo-router";
import AppGradient from "@/components/AppGradient";
import { I18nextProvider, useTranslation } from "react-i18next";
import i18n from "@/assets/i18n/i18n";
import CustomText from "@/atoms/CustomText";
import CustomTouchableOpacity from "@/atoms/CustomTouchableOpacity";

const App = () => {
  const router = useRouter();
  const { t } = useTranslation();
  return (
    <I18nextProvider i18n={i18n}>
      <View className="flex-1">
        <ImageBackground
          source={bgimgnew}
          resizeMode="cover"
          className="flex-1"
        >
          <AppGradient colors={["rgba(0,0,0,0.2)", "rgba(0,0,0,0.6)"]}>
            <View className="flex flex-1 mx-5 my-12 justify-between items-center">
              <View className="w-72 flex justify-center items-center">
                <CustomText preset="heading">
                  {t("app.breaking_news_title")}
                </CustomText>
                <CustomText preset="body">{`${t(
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
    </I18nextProvider>
  );
};

export default App;
