import { View, Text } from "react-native";
import React from "react";

export default function MiniHeader({ label }) {
  return (
    <View className="px-4 my-4 justify-between flex-row items-center">
      <Text
        className="text-xl text-red-500 dark:text-white "
        style={{
          fontFamily: "SpaceGroteskBold",
        }}
      >
        {label}
      </Text>

      <Text
        className="text-base text-gray-800 dark:text-neutral-400 "
        style={{
          fontFamily: "SpaceGroteskMedium",
        }}
      >
        View all
      </Text>
    </View>
  );
}
