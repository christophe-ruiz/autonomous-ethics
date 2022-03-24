import {Character} from "./character";

export interface Tile {
  lights: boolean,
  car_occupants: Character[],
  leftside: Character[],
  rightside: Character[]
}
