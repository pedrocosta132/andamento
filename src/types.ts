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
  paymentMethod?: string;
  price?: number;
  startingDate?: Date;
};
