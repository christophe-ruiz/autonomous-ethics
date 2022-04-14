import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  get(key: string): any {
    return sessionStorage ? sessionStorage.getItem(key) : null;
  }

  set(key: string, value: any): void {
    if (sessionStorage) {
      sessionStorage.setItem(key, value);
    }
  }

  remove(key:string){
    sessionStorage.removeItem(key);
  }

  flush() {
    this.remove('user');
  }

  pushChoice(index: number, which: boolean):void {

  }
}
