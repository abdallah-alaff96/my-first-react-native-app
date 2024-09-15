import {
  View,
  FlatList,
  ActivityIndicator,
  useColorScheme,
} from "react-native";
import React from "react";
import AppGradient from "@/components/AppGradient";
import { router } from "expo-router";
import { useTranslation } from "react-i18next";
import Colors from "@/constants/Colors";
import CustomText from "@/atoms/CustomText";
import CustomPressable from "@/atoms/CustomPressable";
import { useFetchData } from "@/hooks/useFetchData";

const NewsList = () => {
  const theme = useColorScheme();
  const { t } = useTranslation();
  const { data, isLoading, error } = useFetchData("/top-headlines?country=us");
  console.log(data?.articles);

  return (
    <View className="flex-1">
      <AppGradient
        colors={[theme === "dark" ? Colors.dark : Colors.light, Colors.primary]}
      >
        <View className="mx-6 my-5 flex items-stretch">
          <View className="flex items-center">
            <CustomText preset="heading">
              {t("news_list.news_list_title")}
            </CustomText>
          </View>

          {isLoading ? (
            <ActivityIndicator
              className="mt-16"
              size="large"
              color={theme === "dark" ? Colors.light : Colors.dark}
            />
          ) : (
            <FlatList
              data={data?.articles || []}
              className="mt-6 mb-4"
              keyExtractor={(item) => item.title}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <CustomPressable
                  preset="default"
                  onPress={() =>
                    router.push({
                      pathname: "/[id]",
                      params: {
                        id: item?.author ?? "Unknown",
                        title: item?.title ?? "No Title",
                        author: item?.author ?? "Unknown",
                        description: item?.description ?? "No Description",
                        urlToImage: item?.urlToImage ?? "",
                      },
                    })
                  }
                >
                  <CustomText preset="subheading">
                    {item?.title || "No Title"}
                  </CustomText>
                </CustomPressable>
              )}
            />
          )}
        </View>
      </AppGradient>
    </View>
  );
};

export default NewsList;
