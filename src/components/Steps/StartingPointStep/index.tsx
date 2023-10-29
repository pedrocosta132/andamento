import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import TextInput from "../../TextInput";
import Button from "../../Button";
import { Station } from "../../../types";
import apiService from "../../../services/mockApi";

type StartingPointStepProps = {
  station: Station | null | undefined;
  onStationCodeChange: (station: Station | undefined) => void;
};

export default function StartingPointStep({
  station,
  onStationCodeChange,
}: StartingPointStepProps) {
  const [inputCode, setInputCode] = useState<string>("");
  const [hasError, setHasError] = useState<boolean>(false);

  const handleCodeChange = async () => {
    const station = await apiService.getStation(inputCode);
    if(!station) {
      window.alert("nao existe codigo");
    }

    onStationCodeChange(station);
  }

  const handleReset = () => {
    setHasError(false);
    setInputCode("");
    onStationCodeChange(undefined);
  }

  return (
    <>
      {!station ? (
        <>
          <Text>LER QRCODE</Text>
          <View>
            <></>
            <Text>ou</Text>
            <></>
          </View>
          <View>
            <TextInput value={inputCode} onChange={setInputCode} />
            <Button
              text="Validar codigo"
              onPress={handleCodeChange}
            />
          </View>
          
        </>
      ) : (
        <>
          <Text>{JSON.stringify(station)}</Text>
          <Pressable onPress={handleReset}><Text>Estacao incorreta? Trocar codigo</Text></Pressable>
        </>
      )}
    </>
  );
}
