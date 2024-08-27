import React, { useEffect, useState } from "react";
import { View, Text, useColorScheme } from "react-native";
import { useTranslation } from "react-i18next";
import * as Localization from "expo-localization";
import AppGradient from "@/components/AppGradient";
import { Picker } from "@react-native-picker/picker";
import Colors from "@/constants/Colors";

const Settings = () => {
  const theme = useColorScheme();
  const { i18n, t } = useTranslation();
  const locales = Localization.getLocales();
  const [selectedLang, setSelectedLang] = useState<string>(
    locales[0].languageCode === "ar" ? "ar" : "en"
  );

  useEffect(() => {
    const deviceLocaleLang = locales[0].languageCode === "ar" ? "ar" : "en";
    i18n.changeLanguage(deviceLocaleLang);
    setSelectedLang(deviceLocaleLang);
  }, []);

  return (
    <View className="flex-1">
      <AppGradient
        colors={[theme === "dark" ? Colors.dark : Colors.light, Colors.primary]}
      >
        <View className="mx-5 my-5">
          <Text
            className={`${
              theme === "dark" ? "text-light" : "text-dark"
            } font-bold text-4xl ${
              i18n.dir() === "ltr" ? "text-left" : "text-right"
            } `}
          >
            {t("settings.settings_title")}
          </Text>
          <View
            className={`flex justify-between items-center ${
              i18n.dir() === "rtl" ? "flex-row-reverse" : "flex-row"
            }`}
          >
            <Text
              className={`${
                theme === "dark" ? "text-light" : "text-dark"
              } font-medium text-2xl flex-1${
                i18n.dir() === "ltr" ? "text-left" : "text-right"
              } `}
            >
              {`${t("settings.language")} :`}
            </Text>

            <View className="h-32 flex flex-1 justify-center">
              <Picker
                enabled={true}
                selectedValue={selectedLang}
                onValueChange={(value) => {
                  i18n.changeLanguage(value);
                  setSelectedLang(value);
                }}
              >
                <Picker.Item
                  label="English"
                  value={"en"}
                  color={theme === "dark" ? Colors.light : Colors.dark}
                />
                <Picker.Item
                  label="Arabic"
                  value={"ar"}
                  color={theme === "dark" ? Colors.light : Colors.dark}
                />
              </Picker>
            </View>
          </View>
          <View
            className={`flex justify-between items-center mb-6 ${
              i18n.dir() === "rtl" ? "flex-row-reverse" : "flex-row"
            }`}
          >
            <Text
              className={`${
                theme === "dark" ? "text-light" : "text-dark"
              } font-medium text-2xl flex-1${
                i18n.dir() === "ltr" ? "text-left" : "text-right"
              } `}
            >
              {`${t("settings.theme")} :`}
            </Text>
            <Text
              className={`${
                theme === "dark" ? "text-light" : "text-dark"
              } font-light text-2xl flex-1${
                i18n.dir() === "ltr" ? "text-left" : "text-right"
              } `}
            >
              {`${theme === "dark" ? t("settings.dark") : t("settings.light")}`}
            </Text>
          </View>
        </View>
      </AppGradient>
    </View>
  );
};

export default Settings;
