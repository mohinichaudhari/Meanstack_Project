import { Component, OnInit } from '@angular/core';


import {Router} from '@angular/router';
@Component({
  selector: 'app-admin-index',
  templateUrl: './admin-index.component.html',
  styleUrls: ['./admin-index.component.css']
})
export class AdminIndexComponent implements OnInit {
  
  constructor(private router:Router) { }

  ngOnInit(){
    if(!sessionStorage.getItem('sid')){
      this.router.navigate(['admin-login'])
  }
}
signout(){
  sessionStorage.removeItem('sid');
    this.router.navigate(['admin-login']);
}

}
