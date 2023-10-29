import { stations } from "../data/stations";
import { Station } from "../types";

type ApiServiceTypes = {
  getStation: (code: string) => Promise<Station>;
}

const apiService: ApiServiceTypes = {
  getStation: (code) => new Promise((resolve, reject) => {
    const station = stations.find((station) => station.code === code);
    !station ? reject("Not found") : resolve(station);
  })
};

export default apiService;
