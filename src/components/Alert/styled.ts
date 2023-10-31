import { StyleSheet } from "react-native";

export const styled = StyleSheet.create({
  container: {
    margin: 8,
    paddingHorizontal: 8,
    paddingVertical: 12,
    display: "flex",
    gap: 8,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f8d7da",
    borderRadius: 8,
  },
  text: {
    color: "#721c24",
    fontSize: 18,
    textAlign: "justify"
  },
});
