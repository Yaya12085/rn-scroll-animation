import { colors, fonts, sizes } from "@/constants/theme";
import { default as MaterialIcons } from "@expo/vector-icons/MaterialIcons";
import { Tabs } from "expo-router";
import React from "react";
import { Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type IconName = keyof typeof MaterialIcons.glyphMap;

const tabscreens = [
  {
    name: "index",
    title: "Synthèse",
    icon: "apps",
  },
  {
    name: "two",
    title: "Patrimoine",
    icon: "analytics",
  },
  {
    name: "three",
    title: "Budget",
    icon: "list-alt",
  },
  {
    name: "four",
    title: "Analyse",
    icon: "compass-calibration",
  },
  {
    name: "five",
    title: "Investir",
    icon: "account-balance",
  },
];

function TabBarIcon(props: {
  name: IconName;
  color: string;
  focused: boolean;
}) {
  return (
    <MaterialIcons
      {...props}
      name={props.name}
      size={28}
      style={{
        marginBottom: -3,
      }}
      color={props.color}
    />
  );
}

export default function TabLayout() {
  const insets = useSafeAreaInsets();
  return (
    <Tabs
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {
          bottom: 0,
          left: 0,
          right: 0,
          height: 78,
          backgroundColor: "#121013",
          elevation: 0,
          borderWidth: 0,
          borderColor: "transparent",
        },
      }}
      safeAreaInsets={{ bottom: insets.bottom }}
      initialRouteName="index"
    >
      {tabscreens.map((screen) => (
        <Tabs.Screen
          key={screen.name}
          name={screen.name}
          options={{
            title: screen.title,
            tabBarLabel: ({ focused }) => (
              <Text
                style={{
                  color: focused ? colors.primary : "#413f42",
                  fontSize: sizes.small,
                  marginBottom: 10,
                  fontFamily: fonts.medium,
                }}
                numberOfLines={1}
              >
                {screen.title}
              </Text>
            ),
            tabBarIcon: ({ focused }) => (
              <TabBarIcon
                name={screen.icon as IconName}
                color={focused ? colors.primary : "#413f42"}
                focused={focused}
              />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}
