import { useMemo } from "react";
import { View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { styled } from "./styled";
import { CompleteTrip } from "../../types";
import Button from "../Button";
import colors from "../../constants/colors";
import { useNavigation } from "@react-navigation/native";
import Countdown, { zeroPad } from "react-countdown";

type ActiveTripMiniatureProps = {
  trip: CompleteTrip;
};

export default function ActiveTripMiniature({
  trip,
}: ActiveTripMiniatureProps) {
  const navigation = useNavigation();

  return (
    <View style={styled.container}>
      <View>
        <View style={styled.itinerary}>
          <Text style={styled.itineraryText}>
            {trip.details.startingPoint?.name}
          </Text>
          <Ionicons name="arrow-forward" size={16} color={colors.gray2} />
          <Text style={styled.itineraryText}>
            {trip.details.destination?.name}
          </Text>
        </View>
        <Text style={styled.expireText}>
          Válido por{" "}
          <Countdown
            date={trip.expires}
            renderer={(countdown) => (
              <>{`${zeroPad(countdown.minutes)}:${zeroPad(
                countdown.seconds
              )}`}</>
            )}
          />
        </Text>
      </View>
      <Button
        text="Ver detalhes"
        onPress={() => navigation.navigate("Trip", { trip: trip })}
        textStyles={{ fontSize: 16 }}
      />
    </View>
  );
}
