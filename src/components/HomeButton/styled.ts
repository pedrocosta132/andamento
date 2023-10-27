import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styled = StyleSheet.create({
  button: {
    flex: 1,
    padding: 4,
    margin: 4,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    borderColor: colors.primary,
    borderWidth: 3,
    borderStyle: "solid",
    borderRadius: 8,
    overflow: "hidden"
  },
  text: {
    color: colors.primary,
    fontSize: 18,
    fontWeight: "bold"
  },
});
