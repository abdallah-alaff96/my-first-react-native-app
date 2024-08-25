import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import * as Localization from "expo-localization";
import { Appearance } from "react-native";
import { useTranslation } from "react-i18next";

const logUserDefaults = () => {
  const { t, i18n } = useTranslation();
  const [localesArray, setLocalesArray] = useState<[string, string | null][]>();

  useEffect(() => {
    const locales = Localization.getLocales()[0];
    const localesArr = Object.entries(locales);
    setLocalesArray(localesArr);
  }, []);

  return (
    <View className="my-5">
      <Text
        className={`text-gray-200 font-medium text-2xl my-2 ${
          i18n.dir() === "ltr" ? "text-left" : "text-right"
        } `}
      >
        {`${t("settings.mobile_phone_information")} :`}
      </Text>
      <View>
        <Text className="text-gray-200 font-light text-xl pl-1 my-2">{`defaultColorScheme :${Appearance.getColorScheme()}`}</Text>
        {localesArray?.map(([key, value], index) => (
          <View
            key={index}
            className="my-2 flex flex-row justify-start items-center"
          >
            <Text className="text-gray-200 font-light text-xl pl-1">
              {key} :
            </Text>
            <Text className="text-gray-200 font-light text-xl pl-1">
              {value}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default logUserDefaults;
