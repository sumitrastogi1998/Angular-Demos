import { Component, OnInit } from '@angular/core';
import { Users } from '../model/users';
import { AuthService } from '../auth.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData:Users = {userName: null, password: null}
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }


  registerUser(value){

    if(localStorage.getItem('userInfo1') === null)
    {
    this.auth.userInfoStore.push(value)
    localStorage.setItem('userInfo1',JSON.stringify(this.auth.userInfoStore))
    localStorage.setItem('userInfo2',JSON.stringify(value))
    this.router.navigate(['/items'])
    }
    else{
      this.auth.userInfoStore = JSON.parse(localStorage.getItem('userInfo1'))
      if(this.auth.userInfoStore.findIndex(e=> e.userName === value.userName) === -1)
      {
      this.auth.userInfoStore.push(value)
      localStorage.setItem('userInfo1',JSON.stringify(this.auth.userInfoStore))
      localStorage.setItem('userInfo2',JSON.stringify(value))
    this.router.navigate(['/items'])
      }
      else{
        alert('User with '+value.userName+" is already present")
      }
    }
  }
}
