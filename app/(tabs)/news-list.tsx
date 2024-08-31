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
import StyledText from "@/atoms/StyledText";

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
        <View className="mx-6 my-5 flex items-stretch">
          <View className="flex items-center">
            <StyledText preset="heading">
              {t("news_list.news_list_title")}
            </StyledText>
          </View>

          {loading ? (
            <ActivityIndicator
              className="mt-16"
              size="large"
              color={theme === "dark" ? Colors.light : Colors.dark}
            />
          ) : (
            <FlatList
              data={news}
              className="mt-6 mb-4"
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
                  className={`h-auto my-3 p-5 rounded-2xl overflow-hidden bg-primary`}
                >
                  <StyledText preset="subheading">{item.author}</StyledText>
                </Pressable>
              )}
            />
          )}
        </View>
      </AppGradient>
    </View>
  );
};

export default NewsList;
