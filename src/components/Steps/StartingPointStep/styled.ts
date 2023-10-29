import { StyleSheet } from "react-native";
import colors from "../../../constants/colors";

export const styled = StyleSheet.create({
  container: {},
  title: {
    textAlign: "center",
    fontSize: 16,
    color: colors.gray1
  },
  stationTitle: {
    padding: 16,
    textAlign: "center",
    fontSize: 24,
    borderWidth: 3,
    borderColor: colors.primary,
    borderRadius: 8,
    color: colors.text,
    textTransform: "uppercase"
  },
  line: {
    flexGrow: 1,
    height: 1,
    borderTopWidth: 1,
    borderColor: colors.text,
    alignSelf: "center"
  }
});
