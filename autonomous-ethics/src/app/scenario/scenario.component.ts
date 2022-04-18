import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scenario',
  templateUrl: './scenario.component.html',
  styleUrls: ['./scenario.component.scss']
})
export class ScenarioComponent implements OnInit {

  public switches = {
    'left': false,
    'right': true
  };

  public isOn(which: boolean): String {
    if (which) return this.switches.right ? 'ON' : 'OFF';
    else return this.switches.left ? 'ON' : 'OFF';
  }

  public useSwitch(which:boolean) : void {
    if(which) this.switches.right = !this.switches.right;
    else this.switches.left = !this.switches.left;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
