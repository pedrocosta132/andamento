import { Pressable, StyleProp, Text, TextStyle } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import colors from "../../constants/colors";
import { styled } from "./styled";

export type ButtonProps = {
  icon?: keyof typeof Ionicons.glyphMap;
  text?: string;
  onPress: () => void;
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
  isDisabled?: boolean;
  buttonStyles?: StyleProp<any>;
  textStyles?: StyleProp<TextStyle>;
};

export default function Button({
  icon,
  text,
  onPress,
  bgColor = colors.primary,
  textColor = colors.white,
  borderColor = colors.primary,
  isDisabled = false,
  buttonStyles = {},
  textStyles = {},
}: ButtonProps) {
  return (
    <Pressable
      style={[
        styled.button,
        { backgroundColor: bgColor, borderColor: borderColor },
        buttonStyles,
      ]}
      onPress={onPress}
      disabled={isDisabled}
    >
      {icon && <Ionicons name={icon} size={48} color={textColor} />}
      {text && (
        <Text style={[styled.text, { color: textColor }, textStyles]}>
          {text}
        </Text>
      )}
    </Pressable>
  );
}
