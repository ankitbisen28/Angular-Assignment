import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarserviceService } from 'src/app/navbarservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUser:any = {}

  username:string = "ankitbisen";
  password:any = "helloworld";

  login = () => {
    if(this.username === this.loginUser.username &&  this.password === this.loginUser.password){
      this.router.navigate(['home']);
      this.nav.show();
    }
    else{
      alert("login creditial wrong")
    }
  } 

  constructor( private router: Router, public nav: NavbarserviceService) { }

  ngOnInit(): void {
    this.nav.hide();
  }

}
