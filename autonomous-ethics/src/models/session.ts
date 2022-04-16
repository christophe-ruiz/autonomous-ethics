import {Scenario} from './scenario';

export interface Session {
  choices: boolean[],
  scenarios: Scenario[]
}
