import { View } from "react-native";
import colors from "../../constants/colors";
import Button from "../Button";
import { styled } from "./styled";
import { useNavigation } from "@react-navigation/native";

export default function StartButton() {
  const navigation = useNavigation();

  return (
    <View style={styled.container}>
      <View style={styled.background} />
      <Button 
        icon="subway"
        text="Iniciar viagem"
        onPress={() => navigation.navigate("CreateTrip")}
        iconSize={32}
        textStyles={{ fontSize: 24 }}
        bgColor={colors.white}
        textColor={colors.primary}
      />
    </View>
  );
}
