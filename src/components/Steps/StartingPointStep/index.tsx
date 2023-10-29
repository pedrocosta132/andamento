import { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import TextInput from "../../TextInput";
import Button from "../../Button";
import { Station } from "../../../types";
import apiService from "../../../services/mockApi";
import { styled } from "./styled";
import colors from "../../../constants/colors";
import { BarCodeScanner, BarCodeScannerResult } from "expo-barcode-scanner";

type StartingPointStepProps = {
  station: Station | null | undefined;
  onStationCodeChange: (station: Station | undefined) => void;
};

export default function StartingPointStep({
  station,
  onStationCodeChange,
}: StartingPointStepProps) {
  const [inputCode, setInputCode] = useState<string>("");
  const [showManualCodeInput, setShowManualCodeInput] =
    useState<boolean>(false);
  const [scanCode, setScanCode] = useState<boolean>(false);

  const handleCodeChange = async () => {
    const station = await apiService.getStation(inputCode);
    if (!station) {
      Alert.alert("Erro", "Código da estação inválido. Tente novamente.");
      return;
    }

    onStationCodeChange(station);
  };

  const handleReset = () => {
    setInputCode("");
    onStationCodeChange(undefined);
    setShowManualCodeInput(false);
  };

  const handleReadQRCode = async () => {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Erro",
        "Não foi possivel utilizar a camera do dispositivo. Por favor, verifique as permissões."
      );
      return;
    }

    setScanCode(true);
  };

  const handleBarCodeScanned = ({ type, data }: BarCodeScannerResult) => {
    if (type !== "qr") {
      Alert.alert("Erro", "Código não é válido");
      setScanCode(false);
      return;
    }

    setInputCode(data);
    handleCodeChange();
  };

  return (
    <>
      {!station ? (
        <>
          <Button icon="camera" text="Ler QR Code" onPress={handleReadQRCode} />
          {/* <BarCodeScanner
            onBarCodeScanned={!scanCode ? undefined : handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
          /> */}
          <View style={{ flexDirection: "row" }}>
            <View style={styled.line}></View>
            <Text style={{ marginHorizontal: 8 }}>ou</Text>
            <View style={styled.line}></View>
          </View>
          {showManualCodeInput ? (
            <View style={{ display: "flex", flexDirection: "row" }}>
              <TextInput value={inputCode} onChange={setInputCode} />
              <Button
                text="Validar código"
                onPress={handleCodeChange}
                textStyles={{ fontSize: 16 }}
                buttonStyles={{ marginLeft: 8 }}
              />
            </View>
          ) : (
            <Button
              text="Inserir código manualmente"
              textColor={colors.text}
              bgColor={colors.background}
              borderColor={colors.background}
              onPress={() => setShowManualCodeInput(true)}
              textStyles={{
                textAlign: "center",
                textDecorationLine: "underline",
                fontSize: 12,
              }}
            />
          )}
        </>
      ) : (
        <>
          <Text style={styled.title}>Estação atual</Text>
          <Text style={styled.stationTitle}>{station.name}</Text>
          <Button
            text="Estação incorreta? Trocar código."
            textColor={colors.text}
            bgColor={colors.background}
            borderColor={colors.background}
            onPress={handleReset}
            textStyles={{
              textAlign: "center",
              textDecorationLine: "underline",
              fontSize: 12,
            }}
          />
        </>
      )}
    </>
  );
}
