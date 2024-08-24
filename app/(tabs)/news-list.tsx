import {
  View,
  Text,
  FlatList,
  Pressable,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import AppGradient from "@/components/AppGradient";
import { router } from "expo-router";
import { useTranslation } from "react-i18next";

const NewsList = () => {
  const { t } = useTranslation();
  const [news, setNews] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  type Article = {
    title: string;
    author: string;
    description: string;
    url: string;
  };

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/top-headlines?country=us&apiKey=35d68208c1fa444a810535db09e7018b"
        );
        const data = await response.json();
        // console.log(data.articles);
        setNews(data.articles);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <View className="flex-1">
      <AppGradient colors={["#ff5f6d", "#d32f2f"]}>
        <View className="mx-5 my-5">
          <View>
            <Text className="text-gray-200 font-bold text-4xl text-center">
              {t("news_list.news_list_title")}
            </Text>
          </View>

          {loading ? (
            <View className="flex justify-center items-center mt-16">
              <ActivityIndicator size="large" color="#ffffff" />
            </View>
          ) : (
            <View className="mt-6">
              <FlatList
                data={news}
                className="mb-20"
                keyExtractor={(item) => item.title}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                  <Pressable
                    onPress={() =>
                      router.push({
                        pathname: "/[id]",
                        params: {
                          id: item.author,
                          title: item.title,
                          author: item.author,
                        },
                      })
                    }
                    className="h-auto my-3 p-5 rounded-2xl overflow-hidden bg-black"
                  >
                    <Text className="text-white text-xl">{item.author}</Text>
                  </Pressable>
                )}
              />
            </View>
          )}
        </View>
      </AppGradient>
    </View>
  );
};

export default NewsList;
