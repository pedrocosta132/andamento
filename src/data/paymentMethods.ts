import { PaymentMethod } from "../types"

export const paymentMethods: PaymentMethod[] = [
  {
    code: "MULTIBANCO",
    name: "Referencia Multibanco",
    icon: "md-card",
  },
  {
    code: "MBWAY",
    name: "MbWay",
    icon: "ios-phone-portrait",
  },
  {
    code: "TRANSFER",
    name: "Tranferencia bancária",
    icon: "cash",
  },
] 