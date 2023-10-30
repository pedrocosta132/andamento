import { FlatList, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Layout from "../components/Layout";
import HomeButton, { HomeButtonProps } from "../components/HomeButton";

export default function Home() {
  const navigation = useNavigation();

  const homeButtons: HomeButtonProps[] = [
    {
      icon: "add",
      text: "Iniciar viagem",
      onPress: () => navigation.navigate("CreateList" as never),
    },
    { icon: "add", text: "Button2", onPress: () => {} },
    { icon: "add", text: "Button3", onPress: () => {} },
    { icon: "add", text: "Button4", onPress: () => {} },
  ];

  return (
    <Layout>
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
    </Layout>
  );
}
