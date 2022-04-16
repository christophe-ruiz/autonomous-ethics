import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {StorageService} from './storage.service';
import {Observable} from 'rxjs';
import {Session} from '../models/session';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  constructor(private router: Router,
              private storage: StorageService) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.storage.get('user')) {
      return true;
    }
    return this.router.createUrlTree(['/user-profile']);
  }

  storeUser(formData: FormData): boolean {
    this.storage.set('user', JSON.stringify(Object.fromEntries(formData)));
    console.log(this.storage.get('user'));
    return true;
  }

  storeSession(scenarios: Session): void {
    this.storage.set('session', JSON.stringify(scenarios));
  }
}
