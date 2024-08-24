import { View, Text, ImageBackground, SafeAreaView } from "react-native";
import React from "react";
import bgimgnew from "@/assets/bgimgnews.jpg";
import { LinearGradient } from "expo-linear-gradient";
import CustomButton from "@/components/CustomButton";
import { Href, useRouter } from "expo-router";
import AppGradient from "@/components/AppGradient";

const App = () => {
  const router = useRouter();
  return (
    <View className="flex-1">
      <ImageBackground source={bgimgnew} resizeMode="cover" className="flex-1">
        <AppGradient colors={["rgba(0,0,0,0.2)", "rgba(0,0,0,0.6)"]}>
          <SafeAreaView className="flex-1 mx-5 my-12 justify-between">
            <View>
              <Text className="text-white text-center font-bold text-4xl ">
                Breaking News
              </Text>
              <Text className="text-center text-white text-xl mt-3">
                Get Your Daily Breaking News Here 🙌
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
  );
};

export default App;
