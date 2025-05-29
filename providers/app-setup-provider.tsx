import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { ReactNode, useCallback, useEffect, useState } from "react";
import { View } from "react-native";

export { ErrorBoundary } from "expo-router";

const AppSetupProvider = ({ children }: { children: ReactNode }) => {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          light: require("@/assets/fonts/light.ttf"),
          medium: require("@/assets/fonts/medium.ttf"),
          bold: require("@/assets/fonts/bold.ttf"),
          regular: require("@/assets/fonts/regular.ttf"),
          black: require("@/assets/fonts/black.ttf"),
          thin: require("@/assets/fonts/thin.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);
  const onLayoutRootView = useCallback(() => {
    if (appIsReady) {
      SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      {children}
    </View>
  );
};
export default AppSetupProvider;
