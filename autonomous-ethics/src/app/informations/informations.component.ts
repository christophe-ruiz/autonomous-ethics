import { Component, OnInit } from '@angular/core';
import {ScenarioComponent} from '../scenario/scenario.component';
import {ScenarioService} from '../../services/scenario.service';

@Component({
  selector: 'app-informations',
  templateUrl: './informations.component.html',
  styleUrls: ['./informations.component.scss']
})
export class InformationsComponent implements OnInit {

  constructor(private scenarioService: ScenarioService) {
    scenarioService.getScenarios();
  }

  ngOnInit(): void {
  }

}
