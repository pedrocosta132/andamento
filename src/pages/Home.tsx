import { useEffect, useMemo, useState } from "react";
import { FlatList, ScrollView, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Layout from "../components/Layout";
import HomeButton, { HomeButtonProps } from "../components/HomeButton";
import ActiveTripMiniature from "../components/ActiveTripMiniature";
import apiService from "../services/mockApi";
import { CompleteTrip } from "../types";

export default function Home() {
  const navigation = useNavigation();

  const [activeTrip, setActiveTrip] = useState<CompleteTrip | null>(null);

  const homeButtons: HomeButtonProps[] = useMemo(
    () => [
      {
        icon: "add",
        text: "Iniciar viagem",
        onPress: () => navigation.navigate("CreateList" as never),
      },
      { icon: "add", text: "Button2", onPress: () => {} },
      { icon: "add", text: "Button3", onPress: () => {} },
      { icon: "add", text: "Button4", onPress: () => {} },
    ],
    []
  );

  useEffect(() => {
    const getTripsOfUser = async () => {
      const currTrip = await apiService.getCurrentTripOfUser();
      if (activeTrip === null && currTrip === null) return;
      setActiveTrip(currTrip);
    };

    const unsubscribe = navigation.addListener("focus", () => {
      getTripsOfUser();
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Layout>
      <ScrollView style={{ flex: 1 }}>
        <FlatList
          data={homeButtons}
          renderItem={({ item }) => (
            <HomeButton
              icon={item.icon}
              text={item.text}
              onPress={item.onPress}
            />
          )}
          keyExtractor={(item) => item.text}
          numColumns={2}
          style={{ width: "100%", paddingHorizontal: 8 }}
        />
      </ScrollView>
      {activeTrip && <ActiveTripMiniature trip={activeTrip} />}
    </Layout>
  );
}
