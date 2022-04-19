import { Injectable } from '@angular/core';
import {Scenario} from "../models/scenario";
import {HttpClient} from "@angular/common/http";
import {httpOptionsBase, serverUrl} from '../configs/server.config';
import Swal from 'sweetalert2';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScenarioService {
  private scenarioUrl = serverUrl + 'scenarios/'
  public submitted: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public scenarios$ : BehaviorSubject<Array<Scenario>> = new BehaviorSubject<Array<Scenario>>(Array<Scenario>());

  constructor(private http: HttpClient) {
  }

  submit(scenario: Scenario): void {
    console.log('requete', scenario)
    this.http.post<Scenario>(this.scenarioUrl, scenario, httpOptionsBase).subscribe((res) => {
      Swal.fire('Success !', 'The scenario was successfully created and published.', 'success');
    }, (err) => { Swal.fire('Sorry !', 'The scenario couldn\'t be published. Try again later.', 'error') });
  }

  getScenarios(): void {
    console.info('GET SCENARIO')
    this.http.get<Scenario[]>(this.scenarioUrl).subscribe(l => this.scenarios$.next(l));
  }
}
