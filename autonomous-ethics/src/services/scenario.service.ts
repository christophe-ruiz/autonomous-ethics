import { Injectable } from '@angular/core';
import {Scenario} from "../models/scenario";

@Injectable({
  providedIn: 'root'
})
export class ScenarioService {

  scenario: Scenario[] = []

  constructor() { }
}
