import AppSetupProvider from "@/providers/app-setup-provider";
import { Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { SafeAreaProvider } from "react-native-safe-area-context";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <AppSetupProvider>
      <SafeAreaProvider style={{ flex: 1 }}>
        <RootLayoutNav />
      </SafeAreaProvider>
    </AppSetupProvider>
  );
}

function RootLayoutNav() {
  return <Slot screenOptions={{ headerShown: false }} />;
}
