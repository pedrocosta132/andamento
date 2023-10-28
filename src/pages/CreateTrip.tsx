import { FlatList, Text } from "react-native";
import Layout from "../components/Layout";
import Stepper from "../components/Stepper";
import { useState } from "react";
import { Trip } from "../types";

export default function CreateTrip() {
  const [step, setStep] = useState<number>(0);
  const [trip, setTrip] = useState<Trip>({});

  return (
    <Layout>
      <Stepper
        steps={[
          { icon: "enter", title: "Ponto de partida" },
          { icon: "exit", title: "Destino" },
          { icon: "card", title: "Pagamento" },
          { icon: "checkmark-circle-outline", title: "Confirmação" },
        ]}
        activeIndex={step}
      />

      <button onClick={() => setStep((prev) => prev - 1)}>-1</button>
      <button onClick={() => setStep((prev) => prev + 1)}>+1</button>
    </Layout>
  );
}
