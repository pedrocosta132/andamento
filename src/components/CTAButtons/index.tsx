import { View, Text, Button, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { styled } from "./styled";
import colors from "../../constants/colors";

type CTAButtonsProps = {
  showReturnButton: boolean;
  onReturn: () => void;
  showConfirmButton: boolean;
  onConfirm: () => void;
  confirmDisabled?: boolean;
};

export default function CTAButtons({
  showReturnButton,
  onReturn,
  showConfirmButton,
  onConfirm,
  confirmDisabled = false,
}: CTAButtonsProps) {
  return (
    <View style={styled.buttons}>
      {showReturnButton && (
        <Pressable
          style={[styled.button, styled.returnButton]}
          onPress={onReturn}
        >
          <Ionicons name="chevron-back-outline" size={32} color={colors.primary} />
        </Pressable>
      )}
      {showConfirmButton && (
        <Pressable
          style={[styled.button, styled.confirmButton]}
          onPress={onConfirm}
          disabled={confirmDisabled}
        >
          Confirmar
        </Pressable>
      )}
    </View>
  );
}
