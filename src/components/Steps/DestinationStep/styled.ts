import { StyleSheet } from "react-native";
import colors from "../../../constants/colors";

export const styled = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 16,
    color: colors.gray1,
  },
  stationTitle: {
    padding: 16,
    textAlign: "center",
    fontSize: 24,
    borderWidth: 3,
    borderColor: colors.primary,
    borderRadius: 8,
    color: colors.text,
    textTransform: "uppercase",
  },
  select: {
    borderWidth: 1,
    borderColor: colors.gray1,
    borderRadius: 8,
  },
  dropdown2BtnStyle: {
    width: "100%",
    height: 50,
    backgroundColor: colors.primary,
    borderRadius: 8,
  },
  dropdown2BtnTxtStyle: {
    color: colors.white,
    textAlign: "center",
    fontWeight: "bold",
  },
  dropdown2DropdownStyle: {
    backgroundColor: colors.primary,
    borderRadius: 12,
  },
  dropdown2RowStyle: { backgroundColor: colors.primary, borderBottomColor: "#C5C5C5" },
  dropdown2RowTxtStyle: {
    color: colors.white,
    textAlign: "center",
    fontWeight: "bold",
  },
  dropdown2SelectedRowStyle: { backgroundColor: "rgba(255,255,255,0.2)" },
  dropdown2searchInputStyle: {
    backgroundColor: colors.primary,
    borderBottomWidth: 1,
    borderBottomColor: colors.white,
    color: colors.white
  },
});
