import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import colors from "../../../constants/colors";
import { PaymentMethod, Trip } from "../../../types";
import Button from "../../Button";
import apiService from "../../../services/mockApi";
import { styled } from "./styled";

type SummaryStepProps = {
  trip: Trip | undefined;
  onStepChange: (newStep: number) => void;
};

export default function SummaryStep({ trip, onStepChange }: SummaryStepProps) {
  if (!trip) return null;

  return (
    <>
      <View style={{ flex: 1, display: "flex", gap: 20 }}>
        <DetailSection
          title="Estação de origem"
          text={trip.startingPoint?.name}
          isEditable={true}
          onEdit={() => onStepChange(0)}
        />
        <DetailSection
          title="Estação de destino"
          text={trip.destination?.name}
          isEditable={true}
          onEdit={() => onStepChange(1)}
        />
        <DetailSection
          title="Método de pagamento"
          text={trip.paymentMethod?.name}
          isEditable={true}
          onEdit={() => onStepChange(2)}
        />
      </View>
    </>
  );
}

type DetailSectionProps = {
  title: string;
  text?: string;
  isEditable?: boolean;
  onEdit?: () => void;
};

function DetailSection({
  title,
  text = "Não selecionado",
  isEditable = false,
  onEdit = () => {},
}: DetailSectionProps) {
  return (
    <View style={styled.detailSection}>
      <Text style={styled.detailTitle}>{title}</Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={styled.detailText}>{text}</Text>
        {isEditable && (
          <Button
            text="modificar"
            textColor={colors.text}
            bgColor={colors.background}
            borderColor={colors.background}
            onPress={onEdit}
            textStyles={{
              textAlign: "center",
              textDecorationLine: "underline",
              fontSize: 12,
            }}
          />
        )}
      </View>
    </View>
  );
}
