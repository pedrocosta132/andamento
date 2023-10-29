import { StyleSheet } from "react-native";

export const styled = StyleSheet.create({
  button: {
    padding: 4,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    borderWidth: 3,
    borderStyle: "solid",
    borderRadius: 8,
    overflow: "hidden",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
