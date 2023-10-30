import { paymentMethods } from "../data/paymentMethods";
import { stations } from "../data/stations";
import { PaymentMethod, Station } from "../types";

type ApiServiceTypes = {
  getStation: (code: string) => Promise<Station>;
  getStations: () => Promise<Station[]>;
  getPaymentMethods: () => Promise<PaymentMethod[]>
}

const apiService: ApiServiceTypes = {
  getStation: (code) => new Promise((resolve, reject) => {
    const station = stations.find((station) => station.code.toUpperCase() === code.toUpperCase());
    !station ? reject("Not found") : resolve(station);
  }),
  getStations: () => new Promise((resolve) => {
    return resolve(stations);
  }),
  getPaymentMethods: () => new Promise((resolve) => {
    return resolve(paymentMethods);
  }),
};

export default apiService;
