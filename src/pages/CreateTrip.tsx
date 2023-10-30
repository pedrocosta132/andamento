import { FlatList, ScrollView, Text } from "react-native";
import Layout from "../components/Layout";
import Stepper from "../components/Stepper";
import { useMemo, useState } from "react";
import { Step, Trip } from "../types";
import CTAButtons from "../components/CTAButtons";
import { useNavigation } from "@react-navigation/native";
import StartingPointStep from "../components/Steps/StartingPointStep";
import DestinationStep from "../components/Steps/DestinationStep";
import PaymentStep from "../components/Steps/PaymentStep";
import SummaryStep from "../components/Steps/SummaryStep";
import apiService from "../services/mockApi";

const steps: Step[] = [
  { icon: "enter", title: "Ponto de partida" },
  { icon: "exit", title: "Destino" },
  { icon: "card", title: "Método de pagamento" },
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

  const handleConfirmButtonClick = async () => {
    if (step < steps.length - 1) {
      setStep((prev) => prev + 1);
      return;
    }
    
    const saved = await apiService.createTrip(trip);
    if(!saved) {
      console.log("falhou");
    }

    navigation.navigate("Home" as never);
  };

  const handleTripFieldChange = (name: string, value: any) => {
    setTrip((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Layout>
      <Stepper
        steps={steps}
        activeIndex={step}
        style={{ paddingHorizontal: 8 }}
      />
      <ScrollView
        style={{ flex: 1, paddingHorizontal: 8 }}
        contentContainerStyle={{
          flex: 1,
          justifyContent: "center",
          display: "flex",
          gap: 24,
        }}
      >
        {step === 0 && (
          <StartingPointStep
            station={trip?.startingPoint}
            onStationCodeChange={(newStation) =>
              handleTripFieldChange("startingPoint", newStation)
            }
          />
        )}
        {step === 1 && (
          <DestinationStep
            station={trip?.destination}
            startingStation={trip?.startingPoint}
            onStationChange={(newStation) =>
              handleTripFieldChange("destination", newStation)
            }
          />
        )}
        {step === 2 && (
          <PaymentStep
            paymentMethod={trip?.paymentMethod}
            onChange={(newPaymentMethod) =>
              handleTripFieldChange("paymentMethod", newPaymentMethod)
            }
          />
        )}
        {step === 3 && (
          <SummaryStep
            trip={trip!}
            onStepChange={(newStep) => setStep(newStep)}
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
