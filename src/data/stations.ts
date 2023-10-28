import { Station } from "../types";

export const stations: Station[] = [
  {
    code: "A1",
    name: "Station A1",
    zone: { code: "Z1" },
    connections: ["A2"],
  },
  {
    code: "A2",
    name: "Station A2",
    zone: { code: "Z1" },
    connections: ["A1", "A3"],
  },
  {
    code: "A3",
    name: "Station A3",
    zone: { code: "Z2" },
    connections: ["A2", "A4"],
  },
  {
    code: "A4",
    name: "Station A4",
    zone: { code: "Z2" },
    connections: ["A3"],
  },
  {
    code: "B1",
    name: "Station B1",
    zone: { code: "Z2" },
    connections: ["B2"],
  },
  {
    code: "B2",
    name: "Station B2",
    zone: { code: "Z2" },
    connections: ["B1", "A3", "B2"],
  },
  {
    code: "B3",
    name: "Station B3",
    zone: { code: "Z3" },
    connections: ["B2"],
  },
];
