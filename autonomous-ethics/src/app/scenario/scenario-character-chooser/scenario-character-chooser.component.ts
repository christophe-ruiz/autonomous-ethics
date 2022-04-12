import { Component, OnInit } from '@angular/core';
import {CharacterService} from "../../../services/character.service";
import {Character} from "../../../models/character";
import {serverUrl} from "../../../configs/server.config";

@Component({
  selector: 'app-scenario-character-chooser',
  templateUrl: './scenario-character-chooser.component.html',
  styleUrls: ['./scenario-character-chooser.component.scss']
})
export class ScenarioCharacterChooserComponent implements OnInit {
  public characters: Character[] = [];
  readonly serverUrl: string = serverUrl;

  constructor(public characterService: CharacterService) {
    this.characterService.characters$.subscribe(c => this.characters = c);
  }

  ngOnInit(): void {
  }

}
