import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styled = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 16,
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
    width: 32,
    height: 32,
    marginRight: 4,
    borderRadius: 32 * 0.5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  stepTitle: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: "bold",
    flex: 1,
  },
});
