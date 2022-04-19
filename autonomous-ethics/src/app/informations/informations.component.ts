import { Component, OnInit } from '@angular/core';
import {ScenarioComponent} from '../scenario/scenario.component';
import {ScenarioService} from '../../services/scenario.service';
import {CharacterService} from '../../services/character.service';
import {BehaviorSubject} from 'rxjs';
import {Character} from '../../models/character';

@Component({
  selector: 'app-informations',
  templateUrl: './informations.component.html',
  styleUrls: ['./informations.component.scss']
})
export class InformationsComponent implements OnInit {

  public characters$: BehaviorSubject<Character[]> = new BehaviorSubject<Character[]>([]);

  constructor(private scenarioService: ScenarioService,
              public characterService: CharacterService) {
    scenarioService.getScenarios();
  }

  ngOnInit(): void {
    this.characterService.characters$.subscribe(c => this.characters$.next(c));
  }

}
