import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styled = StyleSheet.create({
  container: {
    marginBottom: 24,
    alignItems: "center",
  },
  background: {
    position: "absolute",
    height: "50%",
    width: "100%",
    backgroundColor: colors.primary,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
  },
});
