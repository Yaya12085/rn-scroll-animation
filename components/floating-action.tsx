import { colors } from "@/constants/theme";
import React from "react";
import { Pressable } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import Icon from "@expo/vector-icons/MaterialIcons";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export default function FloatingAction() {
  const isExpanded = useSharedValue(false);

  const handlePress = () => {
    isExpanded.value = !isExpanded.value;
  };

  const plusIconStyle = useAnimatedStyle(() => {
    const rotateValue = isExpanded.value ? "45deg" : "0deg";
    return {
      transform: [{ rotate: withTiming(rotateValue) }],
    };
  });

  return (
    <AnimatedPressable
      onPress={handlePress}
      style={{
        position: "absolute",
        bottom: 10,
        right: 10,
        zIndex: 1000,
        flexDirection: "row",
        height: 56,
        width: 56,
        borderRadius: 999,
        backgroundColor: colors.primary,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Animated.View style={[plusIconStyle]}>
        <Icon name="add" size={30} color={colors.black} />
      </Animated.View>
    </AnimatedPressable>
  );
}
