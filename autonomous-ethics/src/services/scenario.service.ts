import { Injectable } from '@angular/core';
import {Scenario} from "../models/scenario";
import {HttpClient} from "@angular/common/http";
import {httpOptionsBase, serverUrl} from '../configs/server.config';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ScenarioService {

  private scenarioUrl = serverUrl + 'scenarios/'

  scenario: Scenario[] = []

  constructor(private http: HttpClient) {
    this.getScenarios()
  }

  getScenarios(): void {
    this.http.get<Scenario[]>(this.scenarioUrl).subscribe(l => this.scenario = l);
  }

  submit(scenario: Scenario): void {
    console.log('requete', scenario)
    this.http.post<Scenario>(this.scenarioUrl, scenario, httpOptionsBase).subscribe((res) => {
      Swal.fire('Success !', 'The scenario was successfully created and published.', 'success');
    }, (err) => { Swal.fire('Sorry !', 'The scenario couldn\'t be published. Try again later.', 'error') });
  }
}
