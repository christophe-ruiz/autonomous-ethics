import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";
import {Scenario} from "../models/scenario";
import {HttpClient} from "@angular/common/http";
import {StorageService} from "./storage.service";
import {serverUrl} from '../configs/server.config';
import {ScenarioService} from './scenario.service';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private readonly DEFAULT_OFFSET = 0;
  private readonly DEFAULT_INDEX = 0;
  private readonly DEFAULT_NUMBER_OF_CHOICES = 10;

  public choice_index$ : BehaviorSubject<number> = new BehaviorSubject<number>(this.DEFAULT_INDEX);
  public number_of_choices$ : BehaviorSubject<number> = new BehaviorSubject<number>(this.DEFAULT_NUMBER_OF_CHOICES);
  public offset$ : BehaviorSubject<number> = new BehaviorSubject<number>(this.DEFAULT_OFFSET);
  public choices$ : BehaviorSubject<Array<boolean>> = new BehaviorSubject<Array<boolean>>(Array<boolean>(this.number_of_choices$.getValue()));

  public scenarios$ : BehaviorSubject<Array<Scenario>> = new BehaviorSubject<Array<Scenario>>(Array<Scenario>(this.number_of_choices$.getValue()));
  public scenario$ : Subject<Scenario> = new Subject<Scenario>();

  private sessionInit: boolean = false;

  private scenarioUrl = serverUrl + 'scenarios/';

  constructor(
    private http: HttpClient,
    private storageService: StorageService,
    private scenarioService: ScenarioService,
  ) {
    this.scenarioService.scenarios$.subscribe(s => {
      if (this.sessionInit) return;
      this.scenarios$.next(s.sort(() => (Math.random() > .5) ? 1 : -1).slice(0, 10));
      console.log('SESSION', this.scenario$)
    });
  }

  pushChoice(index: number, which: boolean):void {
    this.sessionInit = false;
    let new_choices = this.choices$.getValue();
    new_choices.splice(index, 1, which);
    this.choices$.next(new_choices);
    this.storageService.set('choices', JSON.stringify(this.choices$.value));
  }

  nextScenario(): void {
    this.sessionInit = true;
    this.choice_index$.next(this.choice_index$.getValue() + 1);
    this.scenario$.next(this.scenarios$.getValue()[this.choice_index$.getValue()])
  }

  moreOffset() :void {
    this.offset$.next(this.offset$.value + 1);
  }

  lessOffset() :void {
    this.offset$.next(this.offset$.value - 1);
  }

  deleteStats(): void {
    this.storageService.remove('user');
    this.storageService.remove('session');
    this.storageService.remove('choices');

    this.offset$.next(this.DEFAULT_OFFSET);
    this.number_of_choices$.next(this.DEFAULT_NUMBER_OF_CHOICES);
    this.choice_index$.next(this.DEFAULT_INDEX);
  }
}
