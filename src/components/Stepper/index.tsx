import { View, Text, StyleProp, ViewStyle } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import colors from "../../constants/colors";
import { Step } from "../../types";
import { styled } from "./styled";

type StepperProps = {
  steps: Step[];
  activeIndex?: number;
  style?: StyleProp<ViewStyle>;
};

export default function Stepper({
  steps = [],
  activeIndex = 0,
  style = {},
}: StepperProps) {
  return (
    <View style={[styled.container, style]}>
      {steps.map((step, index) => (
        <StepItem
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

function StepItem({
  icon,
  title,
  isActive,
  isDone,
}: Step & { isActive: boolean; isDone: boolean }) {
  return (
    <View style={[styled.step, { flexGrow: isActive ? 1 : 0 }]}>
      <View
        style={[
          styled.stepIcon,
          {
            backgroundColor: isActive || isDone ? colors.primary : "#505050",
            opacity: isActive ? 1 : 0.45,
          },
        ]}
      >
        <Ionicons name={icon} size={18} color={colors.white} />
      </View>
      {isActive && <Text style={styled.stepTitle}>{title}</Text>}
    </View>
  );
}
