import { FlatList, ScrollView, Text } from "react-native";
import Layout from "../components/Layout";
import Stepper from "../components/Stepper";
import { useState } from "react";
import { Trip } from "../types";
import CTAButtons from "../components/CTAButtons";

export default function CreateTrip() {
  const [step, setStep] = useState<number>(0);
  const [trip, setTrip] = useState<Trip>({});

  return (
    <Layout>
      <ScrollView style={{ flex: 1, width: "100%" }}>
        <Stepper
          steps={[
            { icon: "enter", title: "Ponto de partida" },
            { icon: "exit", title: "Destino" },
            { icon: "card", title: "Pagamento" },
            { icon: "checkmark-circle-outline", title: "Confirmação" },
          ]}
          activeIndex={step}
        />
      </ScrollView>
      <CTAButtons
        showConfirmButton={true}
        onConfirm={() => setStep((prev) => prev + 1)}
        confirmDisabled={step > 2}
        showReturnButton={step > 0}
        onReturn={() => setStep((prev) => prev - 1)}
      />
    </Layout>
  );
}
