import { View, Text, Pressable } from "react-native";
import React from "react";
import { router, useLocalSearchParams } from "expo-router";
import AppGradient from "@/components/AppGradient";
import AntDesign from "@expo/vector-icons/AntDesign";

const Details = () => {
  const { author, title } = useLocalSearchParams();
  // console.log(author);

  return (
    <View className="flex-1">
      <AppGradient colors={["#ff5f6d", "#d32f2f"]}>
        <View className="p-5">
          <Pressable onPress={() => router.back()}>
            <AntDesign name="leftcircle" size={50} color="black" />
          </Pressable>
          <Text className="text-gray-200 font-bold text-4xl text-center">
            Details
          </Text>
        </View>
        <View className="p-5">
          <Text className="text-white text-xl">Author: {author}</Text>
          <Text className="text-white text-base mt-4">
            Description: {title}
          </Text>
        </View>
      </AppGradient>
    </View>
  );
};

export default Details;
