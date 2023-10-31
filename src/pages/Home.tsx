import { useEffect, useMemo, useState } from "react";
import { FlatList, ScrollView, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Layout from "../components/Layout";
import HomeButton, { HomeButtonProps } from "../components/HomeButton";
import ActiveTripMiniature from "../components/ActiveTripMiniature";
import apiService from "../services/mockApi";
import { CompleteTrip } from "../types";
import StartButton from "../components/StartButton";
import Alert from "../components/Alert";

export default function Home() {
  const navigation = useNavigation();

  const [activeTrip, setActiveTrip] = useState<CompleteTrip | null>(null);

  const homeButtons: HomeButtonProps[] = useMemo(
    () => [
      { icon: "bookmarks-sharp", text: "As minhas viagens", onPress: () => {} },
      { icon: "md-help-circle", text: "Ajuda", onPress: () => {} },
      { icon: "ios-map", text: "Mapas e horários", onPress: () => {} },
      { icon: "information-circle", text: "Conhecer o metro", onPress: () => {} },
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
        <StartButton />
        <Alert text="Adipisci voluptate accusantium nam. Tempora accusantium itaque minima nisi. Provident aut ut itaque maiores. Hic ea est aut voluptates. Autem cum minus eum neque autem laborum. Hic asperiores molestiae tenetur possimus." />
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
