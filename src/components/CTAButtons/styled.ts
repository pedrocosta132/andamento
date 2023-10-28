import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styled = StyleSheet.create({
  buttons: {
    width: "100%",
    padding: 8,
    flexDirection: "row",
    alignItems: "stretch",
    backgroundColor: colors.background,
  },
  button: {
    height: 57,
    padding: 8,
    borderStyle: "solid",
    borderWidth: 3,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  returnButton: {
    marginRight: 8,
    borderColor: colors.primary,
  },
  confirmButton: {
    flex: 1,
    flexGrow: 1,
    borderColor: colors.primary,
    backgroundColor: colors.primary,
    color: colors.white,
    textTransform: "uppercase",
    fontSize: 24,
    fontWeight: "bold",
  },
});
