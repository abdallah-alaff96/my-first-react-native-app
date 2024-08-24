import React, { useEffect, useState } from "react";
import { View, Text, Switch, Button } from "react-native";
import { useTranslation } from "react-i18next";
import * as Localization from "expo-localization";
import AppGradient from "@/components/AppGradient";

const Settings = () => {
  const { i18n, t } = useTranslation();
  const [isEnable, setIsEnable] = useState(i18n.language === "ar");

  useEffect(() => {
    const deviceLocaleLang = Localization.locale.startsWith("ar") ? "ar" : "en";
    i18n.changeLanguage(deviceLocaleLang);
    setIsEnable(deviceLocaleLang === "ar");
  }, []);

  const toggleSwitch = () => {
    const newLang = isEnable ? "en" : "ar";
    i18n.changeLanguage(newLang);
    setIsEnable(!isEnable);
  };

  return (
    <View className="flex-1">
      <AppGradient colors={["#ff5f6d", "#d32f2f"]}>
        <View className="mx-5 my-5">
          <Text
            className={`text-gray-200 font-bold text-4xl ${
              i18n.dir() === "ltr" ? "text-left" : "text-right"
            } `}
          >
            {t("settings.settings_title")}
          </Text>
          <View
            className={`flex justify-between items-center mt-6 ${
              i18n.dir() === "rtl" ? "flex-row-reverse" : "flex-row"
            }`}
          >
            <Text className="text-gray-200 font-medium text-2xl">
              {t("settings.language")}
            </Text>

            <Text className="text-gray-200 font-light text-2xl">
              {isEnable ? "Arabic" : "English"}
            </Text>

            <View>
              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnable ? "#f5dd4b" : "#f4f3f4"}
                onValueChange={toggleSwitch}
                value={isEnable}
              />
            </View>
          </View>
        </View>
      </AppGradient>
    </View>
  );
};

export default Settings;
