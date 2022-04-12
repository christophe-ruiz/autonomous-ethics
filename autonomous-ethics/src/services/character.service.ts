import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Character} from "../models/character";
import {HttpClient} from "@angular/common/http";
import {httpOptionsBase, serverUrl} from "../configs/server.config";

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private charactersUrl = serverUrl + 'characters'

  public characters$: BehaviorSubject<Character[]> = new BehaviorSubject<Character[]>([]);

  constructor(private http: HttpClient) {
    this.retrieveCharacters()
  }

  public retrieveCharacters () {
    this.http.get<Character[]>(this.charactersUrl).subscribe(c => {
      this.characters$.next(c);
      console.log(c);
    });
  }
}
