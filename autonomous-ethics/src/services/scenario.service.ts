import { Injectable } from '@angular/core';
import {Scenario} from "../models/scenario";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ScenarioService {

  scenario: Scenario[] = []

  constructor(private http: HttpClient) {

  }
}
