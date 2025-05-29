import { colors, fonts, sizes, spacings } from "@/constants/theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import Animated, {
  interpolateColor,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

const { width } = Dimensions.get("window");

type dataType = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
};

const data: dataType[] = [
  {
    id: "1",
    title: "COMMUNAUTÉ FINARY",
    subtitle: "Echangez avec d'autres investisseurs",
    image: "https://picsum.photos/300/300?random=1",
  },
  {
    id: "2",
    title: "NOUVEAUTÉ",
    subtitle: "On a ajouté un nouveau module",
    image: "https://picsum.photos/300/300?random=2",
  },
  {
    id: "3",
    title: "COMMUNAUTÉ FINARY",
    subtitle: "Echangez avec d'autres investisseurs",
    image: "https://picsum.photos/300/300?random=3",
  },
  {
    id: "4",
    title: "NOUVEAUTÉ",
    subtitle: "On a ajouté un nouveau module",
    image: "https://picsum.photos/300/300?random=4",
  },
  {
    id: "5",
    title: "COMMUNAUTÉ FINARY",
    subtitle: "Echangez avec d'autres investisseurs",
    image: "https://picsum.photos/300/300?random=5",
  },
];

const AnimatedDot = ({
  index,
  scrollX,
  ITEM_WIDTH,
}: {
  index: number;
  scrollX: any;
  ITEM_WIDTH: number;
}) => {
  const animatedDotStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      scrollX.value / ITEM_WIDTH,
      [index - 1, index, index + 1],
      [colors.gray[600], colors.white, colors.gray[600]]
    );
    return { backgroundColor };
  });

  return <Animated.View style={[styles.dot, animatedDotStyle]} />;
};

export default function News() {
  const scrollX = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x;
    },
  });

  const ITEM_WIDTH = width * 0.8;

  const IMAGE_SIZE = 120;

  const renderItem = ({ item }: { item: dataType }) => (
    <Pressable style={[styles.card, { width: ITEM_WIDTH }]}>
      <View
        style={{
          zIndex: 2,
          height: "100%",
          width: ITEM_WIDTH - IMAGE_SIZE - spacings.m,
          gap: spacings.s,
        }}
      >
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
      </View>
      <LinearGradient
        colors={["#0000009e", "#0000009e", "transparent", "transparent"]}
        locations={[0, 0.3, 0.5, 1]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0.8, y: 2 }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1,
        }}
      />
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: item.image }}
          style={styles.image}
          contentFit="contain"
        />
      </View>
      <Pressable style={styles.closeBtn}>
        <MaterialCommunityIcons name="close" size={20} color={colors.white} />
      </Pressable>
    </Pressable>
  );

  return (
    <View style={{ alignItems: "center" }}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Fil d&apos;actualités</Text>
        <View style={styles.dotsContainer}>
          {data.map((_, index) => (
            <AnimatedDot
              key={index}
              index={index}
              scrollX={scrollX}
              ITEM_WIDTH={ITEM_WIDTH}
            />
          ))}
        </View>
      </View>

      <Animated.FlatList
        data={data}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        contentContainerStyle={{ alignItems: "center", gap: spacings.s }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
    width: "100%",
  },
  headerTitle: {
    fontSize: sizes.h3,
    color: colors.white,
    fontFamily: fonts.medium,
  },
  card: {
    height: 120,
    backgroundColor: "#1e1e1e",
    borderRadius: sizes.radius / 2,
    padding: spacings.m,
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
    gap: spacings.s,
  },
  title: {
    fontSize: sizes.body,
    color: colors.gray[500],
    fontFamily: fonts.bold,
  },
  subtitle: {
    fontSize: sizes.h3,
    fontFamily: fonts.medium,
    color: colors.white,
    flexWrap: "wrap",
  },
  imageContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  image: {
    position: "absolute",
    right: 0,
    width: 120,
    height: 120,
  },

  closeBtn: {
    position: "absolute",
    top: 6,
    right: 6,
    width: 30,
    height: 30,
    borderRadius: 999,
    backgroundColor: "#444",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
  },
  dotsContainer: {
    flexDirection: "row",
    gap: spacings.s,
  },
  dot: {
    width: 26,
    height: 4,
    borderRadius: 999,
  },
});
