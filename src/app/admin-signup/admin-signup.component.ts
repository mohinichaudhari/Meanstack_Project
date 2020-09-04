import { Component, OnInit } from '@angular/core';
import {faUserPlus,faIdCard,faEnvelope,faLock,faMobile} from '@fortawesome/free-solid-svg-icons';
import { FormGroup,FormBuilder, FormControl ,Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-signup',
  templateUrl: './admin-signup.component.html',
  styleUrls: ['./admin-signup.component.css']
})
export class AdminSignupComponent implements OnInit {
  public faUserPlus= faUserPlus;
  public faIdCard = faIdCard;
  public faEnvelope = faEnvelope;
  public faLock = faLock;
  public faMobile =faMobile;

  loginform = new FormGroup({
    
    adminname : new FormControl('',[
      Validators.required,
      Validators.pattern("[a-zA-z ]{1,}$")
    ]),
    emailid : new FormControl('',[
      Validators.required,
      Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")
    ]),
    password : new FormControl('',[
      Validators.required,
      Validators.pattern("(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z]).{8,}$")]),
  
      mobile : new FormControl('',[
        Validators.required,
        Validators.pattern("[0-9]{10}$")
      ]),
      date : new FormControl('',[
        Validators.required
      ]),
    });

      get adname(){
        return this.loginform.get('adminname')
      }
      get eid(){
        return this.loginform.get('emailid')
      }
    
      get pass(){
      return this.loginform.get('password')
      }
      get mno(){
        return this.loginform.get('mobile')
      }
      get date1(){
        return this.loginform.get('date')
      }
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {}
  async registerHere() {
    const data = this.loginform.value;
    const url = 'http://localhost:3100/addadmin';

    await this.http.post(url, data).toPromise();

    this.router.navigate(['student-login']);
  }

}
