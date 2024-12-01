import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { catchError, filter, map, Observable, of, take, timeout } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{
  constructor(private authService : AuthService, private router : Router) { }
  canActivate(): Observable<boolean> {
    return this.authService.user$.pipe(
      map((user) => {
        if (user) {
          return true;
        } 
        else {
          this.router.navigateByUrl('/Login');
          return false;
        }
      })
    );
  }

}
