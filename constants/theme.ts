import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const colors = {
  card: "#F5E9E8",
  statusBar: "#EEF8E6",
  primary: "#f5c998",
  secondary: "#f49d53",
  danger: "#D12600",
  success: "#50BC02",
  background: "#0c0611",
  text: "#180202",
  accent: "#D12600",
  gray: {
    100: "#f3f4f5",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
  },
  white: "#fff",
  black: "#000",
};

export const sizes = {
  width,
  height,
  title: 40,
  h1: 32,
  h2: 24,
  h3: 18,
  h4: 16,
  h5: 14,
  body: 14,
  small: 12,
  radius: 16,
};

export const spacings = {
  xs: 4,
  s: 8,
  m: 18,
  l: 24,
  xl: 40,
};
export const fonts = {
  light: "light",
  medium: "medium",
  bold: "bold",
  regular: "regular",
  black: "black",
  thin: "thin",
};

export const shadow = {
  shadowColor: "#A0A0A0",
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.18,
  shadowRadius: 1.0,

  elevation: 1,
};
