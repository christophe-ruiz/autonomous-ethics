import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";
import {Scenario} from "../models/scenario";
import {HttpClient} from "@angular/common/http";
import {StorageService} from "./storage.service";

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  public choice_index$ : BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public number_of_choices$ : BehaviorSubject<number> = new BehaviorSubject<number>(10);
  public offset$ : BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private choices$ : BehaviorSubject<Array<boolean>> = new BehaviorSubject<Array<boolean>>(Array<boolean>(this.number_of_choices$.getValue()));

  public scenarios$ : BehaviorSubject<Array<Scenario>> = new BehaviorSubject<Array<Scenario>>(Array<Scenario>(this.number_of_choices$.getValue()));
  public scenario$ : Subject<Scenario> = new Subject<Scenario>();

  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) {

  }

  pushChoice(index: number, which: boolean):void {
    let new_choices = this.choices$.getValue();
    new_choices.splice(index, 1, which);
    this.choices$.next(new_choices);
    this.storageService.set('choices', JSON.stringify(this.choices$.value));
  }

  nextScenario(): void {
    this.choice_index$.next(this.choice_index$.getValue() + 1);
    this.scenario$.next(this.scenarios$.getValue()[this.choice_index$.getValue()])
  }

  moreOffset() :void {
    this.offset$.next(this.offset$.value + 1);
  }

  lessOffset() :void {
    this.offset$.next(this.offset$.value - 1);
  }
}
