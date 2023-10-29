import { useEffect, useMemo, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import Ionicons from "@expo/vector-icons/Ionicons";
import Button from "../../Button";
import { Station } from "../../../types";
import apiService from "../../../services/mockApi";
import { styled } from "./styled";
import colors from "../../../constants/colors";

type DestinationStepProps = {
  startingStation: Station | null | undefined;
  station: Station | null | undefined;
  onStationChange: (station: Station | undefined) => void;
};

export default function DestinationStep({
  startingStation,
  station,
  onStationChange,
}: DestinationStepProps) {
  const [stations, setStations] = useState<Station[]>([]);

  const filteredStations = useMemo(
    () => stations.filter((a) => a.code !== startingStation?.code),
    [stations, startingStation]
  );

  useEffect(() => {
    const fetchStations = async () => {
      const stations = await apiService.getStations();
      setStations(stations);
    };

    fetchStations();
  }, []);

  const handleSelectItem = (selectedItem: Station) => {
    onStationChange(selectedItem);
  };

  const handleReset = () => {
    onStationChange(undefined);
  }

  return (
    <>
      {!station ? (
        <>
          <SelectDropdown
            data={filteredStations}
            onSelect={handleSelectItem}
            buttonTextAfterSelection={(selectedItem) => selectedItem.name}
            rowTextForSelection={(item) => item.name}
            defaultButtonText={"Selecionar estação de destino"}
            buttonStyle={styled.dropdown2BtnStyle}
            buttonTextStyle={styled.dropdown2BtnTxtStyle}
            renderDropdownIcon={(isOpened) => {
              return (
                <Ionicons
                  name={isOpened ? "chevron-up" : "chevron-down"}
                  color={colors.white}
                  size={18}
                />
              );
            }}
            dropdownIconPosition={"right"}
            dropdownStyle={styled.dropdown2DropdownStyle}
            rowStyle={styled.dropdown2RowStyle}
            rowTextStyle={styled.dropdown2RowTxtStyle}
            selectedRowStyle={styled.dropdown2SelectedRowStyle}
            search
            searchInputStyle={styled.dropdown2searchInputStyle}
            searchPlaceHolder={"Procurar estação"}
            searchPlaceHolderColor={colors.white}
            renderSearchInputLeftIcon={() => {
              return (
                <Ionicons name={"search"} color={colors.white} size={18} />
              );
            }}
          />
        </>
      ) : (
        <>
          <Text style={styled.title}>Estação destino</Text>
          <Text style={styled.stationTitle}>{station.name}</Text>
          <Button
            text="Clique aqui para trocar de destino"
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
