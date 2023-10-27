import { View } from "react-native";
import { styled } from "./styled";

type LayoutProps = {
  children: any;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <View style={styled.container}>
      <h1>Layout</h1>
      {children}
    </View>
  );
}
