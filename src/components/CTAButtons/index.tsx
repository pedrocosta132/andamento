import { View } from "react-native";
import colors from "../../constants/colors";
import Button from "../Button";
import { styled } from "./styled";

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
        <Button
          icon="chevron-back-outline"
          textColor={colors.primary}
          bgColor={colors.background}
          onPress={onReturn}
        />
      )}
      {showConfirmButton && (
        <Button
          text="Confimar"
          textStyles={{ textTransform: "uppercase" }}
          buttonStyles={{ flexGrow: 1, marginLeft: 8 }}
          onPress={onConfirm}
          isDisabled={confirmDisabled}
        />
      )}
    </View>
  );
}
