import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styled = StyleSheet.create({
  input: {
    padding: 12,
    flexGrow: 1,
    backgroundColor: colors.white,
    borderColor: "#dedede",
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: 8,
    fontSize: 18,
  }
});
