import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styled = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 8,
    paddingVertical: 12,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    color: colors.white,
    backgroundColor: colors.primary,
  },
  title: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 18,
  },
});
