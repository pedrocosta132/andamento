import AsyncStorage from "@react-native-async-storage/async-storage";
import { paymentMethods } from "../data/paymentMethods";
import { stations } from "../data/stations";
import { CompleteTrip, PaymentMethod, Station, Trip } from "../types";
import { nanoid } from "nanoid";

type ApiServiceTypes = {
  getStation: (code: string) => Promise<Station>;
  getStations: () => Promise<Station[]>;
  getPaymentMethods: () => Promise<PaymentMethod[]>;
  createTrip: (newTrip: Trip) => Promise<boolean>;
  getTripsOfUser: () => Promise<CompleteTrip[]>;
  getCurrentTripOfUser: () => Promise<CompleteTrip | null>;
};

const apiService: ApiServiceTypes = {
  getStation: (code) =>
    new Promise((resolve, reject) => {
      const station = stations.find(
        (station) => station.code.toUpperCase() === code.toUpperCase()
      );
      !station ? reject("Not found") : resolve(station);
    }),
  getStations: () =>
    new Promise((resolve) => {
      return resolve(stations);
    }),
  getPaymentMethods: () =>
    new Promise((resolve) => {
      return resolve(paymentMethods);
    }),
  createTrip: (newTrip: Trip) =>
    new Promise(async (resolve, reject) => {
      const createdTrip: CompleteTrip = {
        id: nanoid(5),
        details: newTrip,
        validationCode: nanoid(10),
        expires: new Date(Date.now() + 1 * (60 * 60 * 1000)),
      };

      try {
        const tripsJSON = JSON.parse((await AsyncStorage.getItem("myTrips"))!);
        const trips = !tripsJSON ? [] : tripsJSON.trips;
        trips.push(createdTrip);
        await AsyncStorage.setItem("myTrips", JSON.stringify({ trips: trips }));
        resolve(true);
      } catch (e) {
        reject(false);
      }
    }),
  getTripsOfUser: () =>
    new Promise(async (resolve, reject) => {
      try {
        const tripsJSON = JSON.parse((await AsyncStorage.getItem("myTrips"))!);
        const trips = !tripsJSON ? [] : tripsJSON.trips;
        return resolve(trips);
      } catch (e) {
        return reject(e);
      }
    }),
  getCurrentTripOfUser: () =>
    new Promise(async (resolve, reject) => {
      try {
        const tripsJSON = JSON.parse((await AsyncStorage.getItem("myTrips"))!);
        const trips = !tripsJSON ? [] : (tripsJSON.trips as CompleteTrip[]);
        const now = new Date();
        const currTrips = trips.filter(
          (a: CompleteTrip) => new Date(a.expires) > now
        );
        if (currTrips.length === 0) {
          return resolve(null);
        }
        const currTrip = currTrips[currTrips.length - 1];
        return resolve(currTrip);
      } catch (e) {
        return reject(e);
      }
    }),
};

export default apiService;
