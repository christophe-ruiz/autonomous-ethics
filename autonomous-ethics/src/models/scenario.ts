import {Character} from "./character";

export interface Scenario {
  lights: {
    "left": boolean,
    "right": boolean,
  },
  car_occupants: Character[],
  leftside: Character[],
  rightside: Character[],
  description: String,
}
