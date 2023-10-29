import { stations } from "../data/stations";
import { Station } from "../types";

type ApiServiceTypes = {
  getStation: (code: string) => Promise<Station>;
  getStations: () => Promise<Station[]>;
}

const apiService: ApiServiceTypes = {
  getStation: (code) => new Promise((resolve, reject) => {
    const station = stations.find((station) => station.code.toUpperCase() === code.toUpperCase());
    !station ? reject("Not found") : resolve(station);
  }),
  getStations: () => new Promise((resolve, reject) => {
    return resolve(stations);
  }),
};

export default apiService;
