import { colors, spacings } from "@/constants/theme";
import { useScrollContext } from "@/providers/scroll-provider";
import Icon from "@expo/vector-icons/MaterialIcons";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { ReactNode, useState } from "react";
import { Pressable, RefreshControl, Text, View } from "react-native";
import Animated, { useAnimatedScrollHandler } from "react-native-reanimated";
import Balance from "./balance";

type CollapsibleHeaderLayoutProps = {
  children: ReactNode;
};

export const CollapsibleHeaderLayout = ({
  children,
}: CollapsibleHeaderLayoutProps) => {
  const { scrollY } = useScrollContext();
  const [refreshing, setRefreshing] = useState(false);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  const TOP_BAR_HEIGHT = 60;

  const handleRefresh = async () => {
    setRefreshing(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setRefreshing(false);
  };

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          height: TOP_BAR_HEIGHT,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: spacings.m,
        }}
      >
        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(225, 225, 225, 0.1)",
            borderRadius: 999,
            height: 40,
            width: 40,
          }}
          onPress={() => {}}
        >
          <Icon name="person-outline" size={24} color={colors.white} />
        </Pressable>
        <View
          style={{
            flexDirection: "row",
            gap: spacings.s,
            alignItems: "center",
          }}
        >
          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              height: 30,
              width: 30,
            }}
            onPress={() => {}}
          >
            <Icon name="remove-red-eye" size={24} color={colors.white} />
          </Pressable>
          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "rgba(225, 225, 225, 0.2)",
              padding: spacings.s,
              borderRadius: 999,
              gap: spacings.s,
              overflow: "hidden",
            }}
            onPress={() => {}}
          >
            <BlurView
              intensity={80}
              tint="dark"
              experimentalBlurMethod="dimezisBlurView"
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                zIndex: -1,
              }}
            />
            <LinearGradient
              colors={[
                "#23144a",
                "#23144a",
                "#5c50b7",
                "#5c50b7",
                "#23144a",
                "#23144a",
                "#5c50b7",
                "#5c50b7",
              ]}
              locations={[0, 0.25, 0.25, 0.5, 0.5, 0.75, 0.75, 1]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 2 }}
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: 16,
                paddingVertical: 8,
                borderRadius: 999,
                zIndex: -2,
              }}
            />

            <Icon name="diamond" size={24} color={colors.primary} />
            <Text style={{ color: colors.primary }}>METTRE À NIVEAU</Text>
          </Pressable>
        </View>
      </View>

      <Balance />

      <Animated.ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={handleRefresh}
            colors={[colors.primary]}
          />
        }
        onScroll={scrollHandler}
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: spacings.m,
          gap: spacings.s,
        }}
        showsVerticalScrollIndicator={false}
      >
        {children}
      </Animated.ScrollView>
    </View>
  );
};
