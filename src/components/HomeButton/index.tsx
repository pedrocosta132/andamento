import { Pressable, Text } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import colors from "../../constants/colors";
import { styled } from "./styled";

type HomeButtonProps = {
  icon: keyof typeof Ionicons.glyphMap;
  text: string;
  onPress: () => void;
};

export default function HomeButton({ icon, text, onPress }: HomeButtonProps) {
  return (
    <Pressable style={styled.button} onPress={onPress}>
      <Ionicons name={icon} size={48} color={colors.primary} />
      <Text style={styled.text}>{text}</Text>
    </Pressable>
  );
}
