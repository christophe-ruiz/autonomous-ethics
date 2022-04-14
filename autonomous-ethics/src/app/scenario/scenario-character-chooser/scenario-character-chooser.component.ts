import {Component, Input, OnInit} from '@angular/core';
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
  public selectedCharacters: Character[] = [];
  @Input() isForLights: boolean = false;

  readonly serverUrl: string = serverUrl;

  constructor(public characterService: CharacterService) {
    if (this.isForLights) {
    } else {
      this.characterService.characters$.subscribe(c => this.characters = c);
    }
  }

  ngOnInit(): void {
  }

  addCharacter(c: Character): void {
    if (this.selectedCharacters.length < 5)
      this.selectedCharacters.push(c);
  }

  removeCharacter(c: Character): void {
    this.selectedCharacters = this.removeItemOnce(this.selectedCharacters, c);
  }

  removeItemOnce(arr: Character[], value: Character): Character[] {
    var index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }

}
