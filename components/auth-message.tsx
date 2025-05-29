import { colors, fonts, sizes, spacings } from "@/constants/theme";
import { FontAwesome6 } from "@expo/vector-icons/";
import { Image } from "expo-image";
import { Text, View, ViewStyle } from "react-native";

const avatars = [
  "https://api.dicebear.com/9.x/shapes/svg?seed=Kingston",
  "https://api.dicebear.com/9.x/shapes/svg?seed=Destiny",
  "https://api.dicebear.com/9.x/shapes/svg?seed=Katherine",
];

const Avatar = ({ uri, style }: { uri: string; style?: ViewStyle }) => (
  <View
    style={[
      {
        width: 30,
        height: 30,
        borderRadius: 999,
        backgroundColor: colors.primary,
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      },
      style,
    ]}
  >
    <Image
      source={{ uri }}
      style={{ width: 30, height: 30 }}
      contentFit="cover"
    />
  </View>
);

const AvatarCounter = ({ count }: { count: number }) => (
  <View
    style={{
      width: 30,
      height: 30,
      borderRadius: 999,
      backgroundColor: colors.gray[900],
      alignItems: "center",
      justifyContent: "center",
      marginLeft: -10,
      borderWidth: 1,
      borderColor: colors.gray[800],
    }}
  >
    <Text
      style={{
        color: "#fff",
        fontSize: 12,
        fontFamily: fonts.bold,
      }}
    >
      +{count}
    </Text>
  </View>
);

export default function AuthMessage() {
  const maxVisible = 2;
  const extraCount = avatars.length - maxVisible;
  const visibleAvatars = avatars.slice(0, maxVisible);

  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: colors.gray[800],
        padding: spacings.m * 0.8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: spacings.s,
        borderRadius: sizes.radius / 2,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: spacings.s,
          flex: 1,
        }}
      >
        <FontAwesome6 name="times-circle" size={20} color={colors.danger} />
        <Text
          style={{
            fontSize: sizes.body,
            color: colors.white,
            fontFamily: fonts.regular,
          }}
        >
          Authentification requise
        </Text>
      </View>

      <View style={{ flexDirection: "row" }}>
        {visibleAvatars.map((uri, index) => (
          <Avatar
            key={index}
            uri={uri}
            style={{ marginLeft: index > 0 ? -10 : 0 }}
          />
        ))}
        {extraCount > 0 && <AvatarCounter count={extraCount} />}
      </View>
    </View>
  );
}
