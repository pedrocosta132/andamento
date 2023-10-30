import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import colors from "../../../constants/colors";
import Button from "../../Button";
import { styled } from "./styled";
import { PaymentMethod } from "../../../types";
import apiService from "../../../services/mockApi";

type PaymentStepProps = {
  paymentMethod: PaymentMethod | null | undefined;
  onChange: (newPaymentMethod: PaymentMethod) => void;
};

export default function PaymentStep({
  paymentMethod,
  onChange,
}: PaymentStepProps) {
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([]);

  useEffect(() => {
    const fetchPaymentMethods = async () => {
      const paymentMethods = await apiService.getPaymentMethods();
      setPaymentMethods(paymentMethods);
    };

    fetchPaymentMethods();
  }, []);

  const handleChangeMethod = (newMethod: PaymentMethod) => {
    onChange(newMethod);
  };

  return (
    <>
      <Text style={[styled.title]}>Selecione um método de pagamento</Text>
      <View style={{ display: "flex", gap: 16 }}>
        {paymentMethods.map((item) => {
          const isActive = item.code === paymentMethod?.code;
          return (
            <Button
              key={item.code}
              icon={item.icon}
              text={item.name}
              textColor={isActive ? colors.white : colors.primary}
              bgColor={isActive ? colors.primary : colors.white}
              buttonStyles={{ paddingVertical: 16 }}
              onPress={() => handleChangeMethod(item)}
            />
          );
        })}
      </View>
    </>
  );
}
