import { Text } from "react-native";
import Layout from "../components/Layout";
import ActiveTrip from "../components/ActiveTrip";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../../App";

export default function Trip() {
  const route = useRoute<RouteProp<RootStackParamList>>();
  const trip = route.params?.trip;

  if(!trip) return null;

  return (
    <Layout>
      <ActiveTrip 
        trip={trip}
      />
    </Layout>
  );
}
