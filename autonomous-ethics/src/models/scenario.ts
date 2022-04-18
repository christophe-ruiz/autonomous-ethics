import {Character} from "./character";

export interface Scenario {
  id: number,
  lights: {
    "left": boolean,
    "right": boolean,
  },
  car_occupants: Character[],
  leftside: Character[],
  rightside: Character[],
  description: {
    left: string,
    right: string
  },
}
