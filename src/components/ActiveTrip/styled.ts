import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styled = StyleSheet.create({
  itinerary: {
    marginTop: 16,
    display: "flex",
    gap: 4,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  itineraryText: {
    fontSize: 20,
    color: colors.gray2,
  },
  subtitle: {
    marginTop: 24,
    textAlign: "center",
    fontSize: 24,
  },
  countdown: {
    textAlign: "center",
    fontSize: 64,
  },
  validationText: {
    marginTop: 8,
    textAlign: "center",
    fontSize: 12,
  }
});
