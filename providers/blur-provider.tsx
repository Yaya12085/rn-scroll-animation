import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, View } from "react-native";

export default function BlurProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <BlurView
      style={styles.container}
      tint="dark"
      experimentalBlurMethod="dimezisBlurView"
      intensity={80}
    >
      <LinearGradient
        colors={["#e50000", "#5886ff", "#131b73", "#10003c"]}
        locations={[0, 0.3, 0.5, 1]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 0.8 }}
        style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
      />
      <View style={styles.content}>{children}</View>
    </BlurView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, .9)",
  },
});
