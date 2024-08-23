import { View, Text, ImageBackground, SafeAreaView } from "react-native";
import React from "react";
import bgimgnew from "@/assets/bgimgnews.jpg";
import { LinearGradient } from "expo-linear-gradient";

const App = () => {
  return (
    <View className="flex-1">
      <ImageBackground source={bgimgnew} resizeMode="cover" className="flex-1">
        <LinearGradient
          className="flex-1"
          colors={["rgba(0,0,0,0.2)", "rgba(0,0,0,0.6)"]}
        >
          <SafeAreaView className="flex-1 justify-between">
            <View>
              <Text className="text-white text-center font-bold text-4xl">
                Breaking News
              </Text>
              <Text className="text-center text-white text-xl">
                Get Your Daily Breaking News Here 🙌
              </Text>
            </View>
          </SafeAreaView>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default App;
