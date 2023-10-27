import { View, Text } from "react-native";
import { styled } from "./styled";
import Ionicons from '@expo/vector-icons/Ionicons';
import colors from "../../constants/colors";

export default function Header() {
  return (
    <View style={styled.container}>
      <Text style={styled.title}>Andamento</Text>
      <Ionicons name="person" size={18} color={colors.white} />
    </View>
  );
}
