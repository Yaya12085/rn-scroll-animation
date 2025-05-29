import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export const SafeArea = ({ children }: { children: React.ReactNode }) => {
  return (
    <React.Fragment>
      <SafeAreaView style={{ flex: 1 }}>{children}</SafeAreaView>
    </React.Fragment>
  );
};
