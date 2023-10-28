import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styled = StyleSheet.create({
  container: {
    width: "100%",
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 18,
  },
  step: {
    flexDirection: "row",
    alignItems: "center",
  },
  stepIcon: {
    width: 64,
    height: 64,
    marginRight: 16,
    borderRadius: 64 * 0.5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  stepTitle: {
    color: colors.primary,
    fontSize: 20,
    fontWeight: "bold",
    flex: 1,
  },
});
