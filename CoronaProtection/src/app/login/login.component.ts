import { Component, OnInit } from '@angular/core';
import { Users } from '../model/users';
import { AuthService } from '../auth.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData:Users = {userName: null, password: null} 
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  loginUser(value){
    if(localStorage.getItem('userInfo1') !== null)
    {
    if(JSON.parse(localStorage.getItem('userInfo1')).find(e=>e.userName === value.userName && e.password === value.password)){
      alert('Login Success')
      localStorage.setItem('userInfo2',JSON.stringify(value))
      this.router.navigate(['/items'])
    }
    else{
      alert('Login failed')
      this.router.navigate(['/register'])
    }
  }
    else{
      alert('Login failed')
      this.router.navigate(['/register'])
    }
  }
}
