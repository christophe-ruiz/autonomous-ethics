import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {SessionService} from "../../services/session.service";
import {Scenario} from "../../models/scenario";
import {UserProfileService} from '../../services/user-profile.service';
import {Router} from '@angular/router';
import {ScenarioService} from '../../services/scenario.service';
import {serverUrl} from '../../configs/server.config';

@Component({
  selector: 'app-judge',
  templateUrl: './judge.component.html',
  styleUrls: ['./judge.component.scss']
})
export class JudgeComponent implements OnInit {

  public serverUrl = serverUrl;

  public scenarios: Array<Scenario> = new Array<Scenario>();
  public choice_index: number = 1;

  public offset: number = 0;
  public number_of_choices: number = 10;

  public scenario: Scenario = {
    id:0,
    lights: {
      "left": false,
      "right": false,
    },
    leftside: [],
    rightside: [],
    car_occupants: [],
    description: {
      left: "",
      right: ""
    }
  };

  choice1_desc !: String;
  choice2_desc !: String;

  constructor(
    private sessionService: SessionService,
    private userProfileService: UserProfileService,
    private scenarioService: ScenarioService,
    private router: Router,
  ) {
    this.scenarioService.getScenarios();
  }
  ngOnInit(): void {
    this.sessionService.number_of_choices$.subscribe(n => this.number_of_choices = n);
    this.sessionService.scenarios$.subscribe(s => this.scenarios = s);
    this.scenario = this.scenarios[this.choice_index-this.offset-1];
    this.sessionService.choice_index$.subscribe(n => {
      this.choice_index = n + 1;
      this.updateScenario();
    });
    this.sessionService.scenarios$.subscribe(scenarios => this.scenarios = scenarios);
    this.sessionService.offset$.subscribe(o => {
      this.offset = o;
      this.updateScenario();
    });
  }

  updateScenario() {
    this.scenario = this.scenarios[this.choice_index-this.offset-1];
    this.choice1_desc = this.scenario.description.left;
    this.choice2_desc = this.scenario.description.right;
  }

  scroll(el: HTMLElement): void {
    el.scrollIntoView({behavior: 'smooth'});
  }

  public select(which: boolean): void {
    this.sessionService.pushChoice(this.choice_index - this.offset - 1, which);
    if (this.choice_index == 10) {
      this.userProfileService.storeSession({
        choices: this.sessionService.choices$.getValue(),
        scenarios: this.sessionService.scenarios$.getValue()
      });
      this.router.navigate(['/sumup']);
    }
    else this.offset ? this.sessionService.lessOffset() : this.sessionService.nextScenario();
  }

  public back() {
    if (this.offset < this.choice_index - 1) this.sessionService.moreOffset();
  }

  public forth() {
    if (this.offset >= 0) this.sessionService.lessOffset();
  }

}
