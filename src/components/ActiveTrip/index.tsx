import { View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { styled } from "./styled";
import colors from "../../constants/colors";
import { CompleteTrip } from "../../types";
import Countdown, { zeroPad } from "react-countdown";
import QRCode from "react-native-qrcode-svg";

type ActiveTripProps = {
  trip: CompleteTrip;
};

export default function ActiveTrip({ trip }: ActiveTripProps) {
  return (
    <>
      <View style={styled.itinerary}>
        <Text style={styled.itineraryText}>
          {trip.details.startingPoint?.name}
        </Text>
        <Ionicons name="arrow-forward" size={20} color={colors.gray2} />
        <Text style={styled.itineraryText}>
          {trip.details.destination?.name}
        </Text>
      </View>
      <Text style={styled.subtitle}>Válido por</Text>
      <Countdown
        date={trip.expires}
        renderer={(countdown) => (
          <Text style={styled.countdown}>{`${zeroPad(
            countdown.minutes
          )}:${zeroPad(countdown.seconds)}`}</Text>
        )}
      />
      <Text style={[styled.subtitle, { marginTop: 32 }]}>Código de validação</Text>
      <View style={{ alignItems: "center",marginTop: 16 }}>
        <QRCode
          value={trip.validationCode}
          size={350}
          color={colors.text}
          backgroundColor={colors.background}
        />
      </View>
      <Text style={styled.validationText}>{trip.validationCode}</Text>
    </>
  );
}
