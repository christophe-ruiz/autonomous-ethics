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

  public genders$: BehaviorSubject<Array<String>> = new BehaviorSubject<Array<String>>([]);
  public religions$: BehaviorSubject<Array<String>> = new BehaviorSubject<Array<String>>([]);
  public politics$: BehaviorSubject<Array<String>> = new BehaviorSubject<Array<String>>([]);

  constructor(private http: HttpClient) {
    this.getGenders();
    this.getReligions();
    this.getPolitics();
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

}
