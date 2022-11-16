import { Component, OnInit, Input } from '@angular/core';
import { NavbarserviceService } from 'src/app/navbarservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  // @Input() public isUserLoggedIn: boolean = false ;

  constructor( public nav: NavbarserviceService) { }
  onClickEventCLicked(value: {userLogin: true}){
    console.log(value)
  }

  ngOnInit(): void {
  }

}
