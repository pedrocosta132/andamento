import { View, Text } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { styled } from "./styled";
import colors from "../../constants/colors";

export default function Header() {
  return (
    <View style={styled.container}>
      <Text style={styled.title}>ANDAMENTO</Text>
      <Ionicons name="person" size={18} color={colors.white} onPress={() => {}}/>
    </View>
  );
}
