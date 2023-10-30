import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styled = StyleSheet.create({
  container: {
    padding: 8,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.white,
  },
  itinerary: {
    display: "flex",
    gap: 4,
    flexDirection: "row",
    justifyContent: "center"
  },
  itineraryText: {
    fontSize: 12,
    color: colors.gray2,
  },
  expireText: {
    fontSize: 18,
    color: colors.text,
  },
});
