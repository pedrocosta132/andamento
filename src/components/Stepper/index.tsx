import { View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import colors from "../../constants/colors";
import { styled } from "./styled";

type Step = {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
};

type StepperProps = {
  steps: Step[];
  activeIndex?: number;
};

export default function Stepper({ steps = [], activeIndex = 0 }: StepperProps) {
  return (
    <View style={styled.container}>
      {steps.map((step, index) => (
        <Step
          key={step.title}
          icon={step.icon}
          title={step.title}
          isActive={index === activeIndex}
          isDone={index < activeIndex}
        />
      ))}
    </View>
  );
}

function Step({ icon, title, isActive, isDone }: Step & { isActive: boolean, isDone: boolean }) {

  return (
    <View style={[styled.step, { flexGrow: isActive ? 1 : 0 }]}>
      <View
        style={[
          styled.stepIcon,
          {
            backgroundColor: isActive || isDone ? colors.primary : "#505050",
            opacity: isActive ? 1 : 0.45
          },
        ]}
      >
        <Ionicons name={icon} size={32} color={colors.white} />
      </View>
      {isActive && <Text style={styled.stepTitle}>{title}</Text>}
    </View>
  );
}
