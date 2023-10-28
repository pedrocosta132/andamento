import Constants from "expo-constants";
import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styled = StyleSheet.create({
  container: {
    width: "100%",
    maxWidth: 720,
    marginHorizontal: "auto",
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.background,
    overflow: "hidden",
  },
});
