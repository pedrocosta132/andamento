import { FlatList, Text, View } from "react-native";
import Layout from "../components/Layout";
import HomeButton from "../components/HomeButton";
import Ionicons from "@expo/vector-icons/Ionicons";

const homeButtons: {
  icon: keyof typeof Ionicons.glyphMap;
  text: string;
  onPress: () => void;
}[] = [
  { icon: "add", text: "Button1", onPress: () => {} },
  { icon: "add", text: "Button2", onPress: () => {} },
  { icon: "add", text: "Button3", onPress: () => {} },
  { icon: "add", text: "Button4", onPress: () => {} },
];

export default function Home() {
  return (
    <Layout>
      <Text>Home</Text>
      <FlatList
        data={homeButtons}
        renderItem={({ item }) => (
          <HomeButton
            icon={item.icon}
            text={item.text}
            onPress={item.onPress}
          />
        )}
        keyExtractor={item => item.text}
        numColumns={2}
        style={{ width: "100%", paddingHorizontal: 8 }}
      />
    </Layout>
  );
}
