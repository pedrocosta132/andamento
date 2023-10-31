import { View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { styled } from "./styled";

type AlertProps = {
  text: string;
};

export default function Alert({ text }: AlertProps) {
  return (
    <View style={styled.container}>
      <Ionicons
        name="warning"
        color="#721c24"
        size={32}
      />
      <Text style={styled.text}>{text}</Text>
    </View>
  );
}
