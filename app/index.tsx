import { View, Text, ImageBackground, SafeAreaView } from "react-native";
import React from "react";
import bgimgnew from "@/assets/bgimgnews.jpg";
import CustomButton from "@/components/CustomButton";
import { Href, useRouter } from "expo-router";
import AppGradient from "@/components/AppGradient";
import { I18nextProvider, useTranslation } from "react-i18next";
import i18n from "@/assets/i18n/i18n";

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
            <SafeAreaView className="flex-1 mx-5 my-12 justify-between">
              <View>
                <Text className="text-white text-center font-bold text-4xl ">
                  {t("app.breaking_news_title")}
                </Text>
                <Text className="text-center text-white text-xl mt-3">
                  {`${t("app.breaking_news_info")} 🙌`}
                </Text>
              </View>
              <View>
                <CustomButton
                  onPress={() => router.push("/news-list" as Href)}
                  title="Get Started!"
                />
              </View>
            </SafeAreaView>
          </AppGradient>
        </ImageBackground>
      </View>
    </I18nextProvider>
  );
};

export default App;
