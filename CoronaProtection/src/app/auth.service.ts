import { Injectable } from '@angular/core';
import { Users } from './model/users';
import { Router } from '../../node_modules/@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userInfoStore: Users[] = []
  constructor(private router: Router) { }


  loggedIn(){
    return !!localStorage.getItem('userInfo2')
  }

  removeUser(){
    localStorage.removeItem('userInfo2')
    this.router.navigate(['/register'])
  }
}
