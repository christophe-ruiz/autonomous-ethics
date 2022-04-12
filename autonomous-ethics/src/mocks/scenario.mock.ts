import {Scenario} from "../models/scenario";

export const ScenarioMock : Scenario = {
  lights: {
    "left": true,
    "right": false
  },
  car_occupants: [
    {id: 8},
  ],
  leftside: [
    {id: 1},
    {id: 2},
    {id: 3},
  ],
  rightside: [
    {id: 2},
    {id: 4},
  ]
}
