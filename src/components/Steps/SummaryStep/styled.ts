import { StyleSheet } from "react-native";
import colors from "../../../constants/colors";

export const styled = StyleSheet.create({
  detailSection: {
    display: "flex",
    gap: 8
  },
  detailTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  detailText: {
    color: colors.text,
    fontSize: 16,
  },
  detailButton: {
    padding: 0,
  },
  detailButtonText: {
    fontSize: 16,
  }
});
