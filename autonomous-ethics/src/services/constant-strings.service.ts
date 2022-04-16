import { Injectable } from '@angular/core';
import {serverUrl} from '../configs/server.config';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConstantStringsService {
  private constantStringsUrl = serverUrl + 'utility/'
  private gendersUrl = this.constantStringsUrl + 'genders/'
  private religionsUrl = this.constantStringsUrl + 'religions/'
  private politicsUrl = this.constantStringsUrl + 'political_compass/'
  private educationUrl = this.constantStringsUrl + 'education/'
  private incomeUrl = this.constantStringsUrl + 'salary_brackets/'
  private countryUrl = this.constantStringsUrl + 'countries/'

  public genders$: BehaviorSubject<Array<String>> = new BehaviorSubject<Array<String>>([]);
  public religions$: BehaviorSubject<Array<String>> = new BehaviorSubject<Array<String>>([]);
  public politics$: BehaviorSubject<Array<String>> = new BehaviorSubject<Array<String>>([]);
  public education$: BehaviorSubject<Array<String>> = new BehaviorSubject<Array<String>>([]);
  public income$: BehaviorSubject<Array<String>> = new BehaviorSubject<Array<String>>([]);
  public countries$: BehaviorSubject<Array<String>> = new BehaviorSubject<Array<String>>([]);

  constructor(private http: HttpClient) {
    this.getGenders();
    this.getReligions();
    this.getPolitics();
    this.getEducation();
    this.getIncome();
    this.getCountry();
  }

  getGenders(): void {
    this.http.get<Array<String>>(this.gendersUrl).subscribe(g => this.genders$.next(g));
  }

  getReligions(): void {
    this.http.get<Array<String>>(this.religionsUrl).subscribe(r => this.religions$.next(r));
  }

  getPolitics(): void {
    this.http.get<Array<String>>(this.politicsUrl).subscribe(r => this.politics$.next(r));
  }

  getEducation(): void {
    this.http.get<Array<String>>(this.educationUrl).subscribe(e => this.education$.next(e));
  }

  getIncome(): void {
    this.http.get<Array<String>>(this.incomeUrl).subscribe(i => this.income$.next(i));
  }

  getCountry(): void {
    this.http.get<Array<String>>(this.countryUrl).subscribe(c => this.countries$.next(c));
  }

}
