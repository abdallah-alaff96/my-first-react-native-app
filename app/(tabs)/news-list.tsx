import {
  View,
  Text,
  FlatList,
  Pressable,
  ActivityIndicator,
  useColorScheme,
} from "react-native";
import React, { useEffect, useState } from "react";
import AppGradient from "@/components/AppGradient";
import { router } from "expo-router";
import { useTranslation } from "react-i18next";
import Colors from "@/constants/Colors";

const NewsList = () => {
  const theme = useColorScheme();
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
      <AppGradient
        colors={[theme === "dark" ? Colors.dark : Colors.light, Colors.primary]}
      >
        <View className="mx-5 my-5">
          <View>
            <Text
              className={`font-bold text-4xl text-center ${
                theme === "dark" ? "text-light" : "text-dark"
              }`}
            >
              {t("news_list.news_list_title")}
            </Text>
          </View>

          {loading ? (
            <View className="flex justify-center items-center mt-16">
              <ActivityIndicator
                size="large"
                color={theme === "dark" ? Colors.light : Colors.dark}
              />
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
                    className={`h-auto my-3 p-5 rounded-2xl overflow-hidden  ${
                      theme === "dark" ? "bg-light" : "bg-dark"
                    }`}
                  >
                    <Text
                      className={`text-lg font-bold  ${
                        theme === "dark" ? "text-dark" : "text-light"
                      }`}
                    >
                      {item.author}
                    </Text>
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
