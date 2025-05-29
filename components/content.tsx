import { colors, fonts, sizes } from "@/constants/theme";
import { Image } from "expo-image";
import { Text, View } from "react-native";

export default function Content() {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        source={require("@/assets/images/empty.png")}
        style={{
          width: 200,
          height: 200,
        }}
      />
      <Text
        style={{
          fontSize: sizes.h2,
          fontFamily: fonts.black,
          color: colors.white,
          textAlign: "center",
        }}
      >
        Pas de performance détectée.
      </Text>
      <View
        style={{
          height: 400,
        }}
      />
    </View>
  );
}
