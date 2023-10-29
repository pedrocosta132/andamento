import { FlatList, ScrollView, Text } from "react-native";
import Layout from "../components/Layout";
import Stepper from "../components/Stepper";
import { useMemo, useState } from "react";
import { Step, Trip } from "../types";
import CTAButtons from "../components/CTAButtons";
import { useNavigation } from "@react-navigation/native";
import StartingPointStep from "../components/Steps/StartingPointStep";

const steps: Step[] = [
  { icon: "enter", title: "Ponto de partida" },
  { icon: "exit", title: "Destino" },
  { icon: "card", title: "Pagamento" },
  { icon: "checkmark-circle-outline", title: "Confirmação" },
];

export default function CreateTrip() {
  const navigation = useNavigation();

  const [step, setStep] = useState<number>(0);
  const [trip, setTrip] = useState<Trip>({});

  const shouldConfirmBeLocked = useMemo(() => {
    return (
      (step === 0 && !trip.startingPoint) ||
      (step === 1 && !trip.destination) ||
      (step === 2 && !trip.paymentMethod)
    );
  }, [trip, step]);

  const handleReturnButtonClick = () => {
    if (step === 0) {
      navigation.goBack();
      return;
    }

    setStep((prev) => prev - 1);
  };

  const handleConfirmButtonClick = () => {
    if (step >= steps.length - 1) {
      console.log("end");
      return;
    }

    setStep((prev) => prev + 1);
  };

  const handleTripFieldChange = (name: string, value: any) => {
    setTrip((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Layout>
      <ScrollView style={{ flex: 1, paddingHorizontal: 8 }}>
        <Stepper steps={steps} activeIndex={step} />
        {step === 0 && (
          <StartingPointStep
            station={trip?.startingPoint}
            onStationCodeChange={(newStation) =>
              handleTripFieldChange("startingPoint", newStation)
            }
          />
        )}
      </ScrollView>
      <CTAButtons
        showConfirmButton={true}
        onConfirm={handleConfirmButtonClick}
        confirmDisabled={shouldConfirmBeLocked}
        showReturnButton={true}
        onReturn={handleReturnButtonClick}
      />
    </Layout>
  );
}
