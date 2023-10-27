import { SafeAreaView } from "react-native";
import { styled } from "./styled";
import Header from "../Header";

type LayoutProps = {
  children: any;
  showHeader?: boolean;
};

export default function Layout({ children, showHeader = true }: LayoutProps) {
  return (
    <SafeAreaView style={styled.container}>
      {showHeader && <Header />}
      {children}
    </SafeAreaView>
  );
}
