import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CharacterService} from "../../../services/character.service";
import {Character} from "../../../models/character";
import {serverUrl} from "../../../configs/server.config";
import {ScenarioService} from '../../../services/scenario.service';

@Component({
  selector: 'app-scenario-character-chooser',
  templateUrl: './scenario-character-chooser.component.html',
  styleUrls: ['./scenario-character-chooser.component.scss']
})
export class ScenarioCharacterChooserComponent implements OnInit {
  public characters: Character[] = [];

  @Input()
  public selectedCharacters: Character[] = [];
  @Output()
  public selectedCharactersChange: EventEmitter<Character[]> = new EventEmitter<Character[]>();

  @Input() isForLights: boolean = false;

  readonly serverUrl: string = serverUrl;

  constructor(
    private characterService: CharacterService,
    private scenarioService: ScenarioService,
  ) {
    this.scenarioService.submitted.subscribe(s => {
      if(s) {
        this.selectedCharacters = [];
        this.scenarioService.submitted.next(false);
      }
    })
    if (this.isForLights) {
    } else {
      this.characterService.characters$.subscribe(c => this.characters = c);
    }
  }

  ngOnInit(): void {
  }

  addCharacter(c: Character): void {
    if (this.selectedCharacters.length < 5) {
      this.selectedCharacters.push(c);
      this.selectedCharactersChange.emit(this.selectedCharacters);
    }
  }

  removeCharacter(c: Character): void {
    this.selectedCharacters = this.removeItemOnce(this.selectedCharacters, c);
    this.selectedCharactersChange.emit(this.selectedCharacters);
  }

  removeItemOnce(arr: Character[], value: Character): Character[] {
    var index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }

}
