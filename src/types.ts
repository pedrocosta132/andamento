import Ionicons from "@expo/vector-icons/Ionicons";

export type Zone = {
  code: string;
};

export type Station = {
  code: string;
  name: string;
  zone: Zone;
  connections?: string[];
};

export type Trip = {
  startingPoint?: Station;
  destination?: Station;
  paymentMethod?: PaymentMethod;
  price?: number;
  startingDate?: Date;
};

export type Step = {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
};

export type PaymentMethod = {
  code: string;
  icon: keyof typeof Ionicons.glyphMap;
  name: string;
}