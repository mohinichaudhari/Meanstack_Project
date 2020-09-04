import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-student-index',
  templateUrl: './student-index.component.html',
  styleUrls: ['./student-index.component.css']
})
export class StudentIndexComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    if(!sessionStorage.getItem('sid')){
      this.router.navigate(['student-login'])
  }
}
signout(){
  sessionStorage.removeItem('sid');
    this.router.navigate(['student-login']);
}
}
