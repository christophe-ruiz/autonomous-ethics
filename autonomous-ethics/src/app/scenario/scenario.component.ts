import { Component, OnInit } from '@angular/core';
import {ScenarioService} from '../../services/scenario.service';
import {Character} from '../../models/character';
import Swal from 'sweetalert2'
import {Scenario} from '../../models/scenario';

@Component({
  selector: 'app-scenario',
  templateUrl: './scenario.component.html',
  styleUrls: ['./scenario.component.scss']
})
export class ScenarioComponent implements OnInit {

  public characters = {
    car_occupants: new Array<Character>(),
    left: new Array<Character>(),
    right: new Array<Character>(),
  }

  public switches = {
    'left': true,
    'right': true
  };

  public light_description = {
    'ON': "Pedestrians are legally allowed to cross this road",
    'OFF': "Pedestrains are NOT legally allowed to cross this road"
  };

  public isOn(which: boolean): String {
    if (which) return this.switches.right ? 'ON' : 'OFF';
    else return this.switches.left ? 'ON' : 'OFF';
  }

  public useSwitch(which:boolean) : void {
    if(which) this.switches.right = !this.switches.right;
    else this.switches.left = !this.switches.left;
  }

  constructor(
    private scenarioService: ScenarioService,
  ) { }

  ngOnInit(): void {
  }

  submit(): void {
    this.scenarioService.submit({
      id: this.scenarioService.scenario.length,
      lights: {
        'left': this.switches.left,
        'right': this.switches.right
      },
      car_occupants: this.characters.car_occupants,
      leftside: this.characters.left,
      rightside: this.characters.right,
      description: {
        left: 'gauche',
        right: 'droite'
      },
    } as Scenario);
    this.scenarioService.getScenarios();
  }

}
