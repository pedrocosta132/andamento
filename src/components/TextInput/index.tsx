import { StyleProp, TextInput as TextInputComponent, TextStyle } from "react-native";
import { styled } from "./styled";

type TextInputProps = {
  value: string;
  onChange: (text: string) => void;
  styles?: StyleProp<TextStyle>
}

export default function TextInput({
  value,
  onChange,
  styles = {},
}: TextInputProps) {
  return (
    <TextInputComponent 
      style={[styled.input, styles]}
      onChangeText={onChange}
      value={value}
    />
  );
}
