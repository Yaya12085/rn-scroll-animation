import { colors, fonts, sizes } from "@/constants/theme";
import { Text, View } from "react-native";

export default function UnderConstruction() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          fontSize: sizes.h1,
          fontFamily: fonts.medium,
          color: colors.white,
          textAlign: "center",
        }}
      >
        Bientôt disponible
      </Text>
    </View>
  );
}
