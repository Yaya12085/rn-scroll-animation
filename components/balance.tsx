import { colors, fonts, sizes, spacings } from "@/constants/theme";
import { useScrollContext } from "@/providers/scroll-provider";
import { Ionicons } from "@expo/vector-icons";
import { Platform, StyleSheet, Text, View } from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
} from "react-native-reanimated";

export default function Balance() {
  const { scrollY } = useScrollContext();

  const startHeight = 160;
  const endHeight = 60;
  const scrollRange = Platform.OS === "ios" ? 140 : 180;

  const data = {
    amount: 226,
    revenue: 0,
    currency: "€",
    percentage: "0,00 %",
    date: "1 jour",
  };

  // Animation styles using useAnimatedStyle
  const expandedViewStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollY.value,
      [0, scrollRange * 0.5],
      [1, 0],
      Extrapolation.CLAMP
    );

    const translateY = interpolate(
      scrollY.value,
      [0, scrollRange],
      [0, -20],
      Extrapolation.CLAMP
    );

    return {
      opacity,
      transform: [{ translateY }],
    };
  });

  const headerStyle = useAnimatedStyle(() => {
    return {
      height: interpolate(
        scrollY.value,
        [0, scrollRange],
        [startHeight, endHeight],
        Extrapolation.CLAMP
      ),
      borderBottomColor: interpolateColor(
        scrollY.value,
        [0, scrollRange],
        ["transparent", colors.gray[500]]
      ),
      borderBottomWidth: interpolate(
        scrollY.value,
        [0, scrollRange],
        [0, 1],
        Extrapolation.CLAMP
      ),
    };
  });

  const collapsedViewStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollY.value,
      [scrollRange * 0.5, scrollRange],
      [0, 1],
      Extrapolation.CLAMP
    );

    return {
      opacity,
    };
  });

  const amountStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      scrollY.value,
      [0, scrollRange],
      [1, 0.8],
      Extrapolation.CLAMP
    );

    return {
      transform: [{ scale }],
    };
  });

  return (
    <Animated.View style={[styles.container, headerStyle]}>
      {/* Expanded View */}
      <Animated.View style={[styles.expandedView, expandedViewStyle]}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>Patrimoine brut</Text>
          <Ionicons
            name="chevron-down"
            size={16}
            color="rgba(255,255,255,0.7)"
          />
        </View>

        <View style={styles.amountRow}>
          <Animated.Text style={[styles.amount, amountStyle]}>
            {data.amount} {data.currency}
          </Animated.Text>
          <View style={styles.progressBar} />
        </View>

        <View style={styles.statsRow}>
          <View
            style={[
              styles.statItem,
              {
                borderWidth: 1,
                borderColor: "rgba(255, 255, 255, 0.2)",
                paddingHorizontal: spacings.s,
                borderRadius: 999,
                paddingVertical: spacings.s,
              },
            ]}
          >
            <Text style={styles.statLabel}>{data.date}</Text>
            <Ionicons
              name="chevron-down"
              size={12}
              color="rgba(255,255,255,0.5)"
            />
          </View>

          <View style={styles.statItem}>
            <Text style={styles.statValue}>
              {data.revenue} {data.currency}
            </Text>
            <Text style={styles.statPercentage}>{data.percentage}</Text>
            <Ionicons
              name="information-circle-outline"
              size={18}
              color="rgba(255,255,255,0.3)"
            />
          </View>
        </View>
      </Animated.View>

      {/* Collapsed View */}
      <Animated.View style={[styles.collapsedView, collapsedViewStyle]}>
        <Text style={styles.collapsedAmount}>
          {data.amount} {data.currency}
        </Text>
        <View style={styles.collapsedStats}>
          <Text style={styles.collapsedChange}>0 {data.currency}</Text>
          <Text style={styles.collapsedPercentage}>{data.percentage}</Text>
          <Ionicons
            name="information-circle-outline"
            size={14}
            color="rgba(255,255,255,0.5)"
          />
        </View>
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: spacings.s,
    overflow: "hidden",
  },
  expandedView: {
    flex: 1,
  },
  collapsedView: {
    position: "absolute",
    top: 15,
    left: 20,
    right: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  title: {
    fontSize: sizes.h3,
    fontFamily: fonts.medium,
    color: "rgba(255, 255, 255, 0.8)",
    marginRight: 8,
  },
  amountRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  amount: {
    fontSize: sizes.title,
    fontFamily: fonts.bold,
    color: colors.white,
  },
  progressBar: {
    width: "30%",
    height: 2,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    borderRadius: 1,
  },
  statsRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacings.s,
  },
  statItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacings.s,
  },
  statLabel: {
    fontSize: sizes.body,
    fontFamily: fonts.medium,
    color: "rgba(255, 255, 255, 0.7)",
  },
  statValue: {
    fontSize: sizes.body,
    fontFamily: fonts.medium,
    color: colors.white,
  },
  statPercentage: {
    fontSize: sizes.body,
    fontFamily: fonts.regular,
    color: colors.white,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    paddingHorizontal: spacings.s / 2,
    paddingVertical: spacings.s / 2,
    borderRadius: sizes.radius / 4,
  },
  collapsedAmount: {
    fontSize: sizes.h2,
    fontFamily: fonts.bold,
    color: colors.white,
  },
  collapsedStats: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacings.s,
  },
  collapsedChange: {
    fontSize: sizes.body,
    fontFamily: fonts.medium,
    color: "rgba(255, 255, 255, 0.9)",
  },
  collapsedPercentage: {
    fontSize: sizes.body,
    fontFamily: fonts.regular,
    color: colors.white,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    paddingHorizontal: spacings.s / 2,
    paddingVertical: spacings.s / 2,
    borderRadius: sizes.radius / 4,
  },
});
