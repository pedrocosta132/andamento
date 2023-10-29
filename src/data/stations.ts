import { Station } from "../types";

export const stations: Station[] = [
  {
    code: "A1",
    name: "Estação A1",
    zone: { code: "Z1" },
    connections: ["A2"],
  },
  {
    code: "A2",
    name: "Estação A2",
    zone: { code: "Z1" },
    connections: ["A1", "A3"],
  },
  {
    code: "A3",
    name: "Estação A3",
    zone: { code: "Z2" },
    connections: ["A2", "A4"],
  },
  {
    code: "A4",
    name: "Estação A4",
    zone: { code: "Z2" },
    connections: ["A3"],
  },
  {
    code: "B1",
    name: "Estação B1",
    zone: { code: "Z2" },
    connections: ["B2"],
  },
  {
    code: "B2",
    name: "Estação B2",
    zone: { code: "Z2" },
    connections: ["B1", "A3", "B2"],
  },
  {
    code: "B3",
    name: "Estação B3",
    zone: { code: "Z3" },
    connections: ["B2"],
  },
];
