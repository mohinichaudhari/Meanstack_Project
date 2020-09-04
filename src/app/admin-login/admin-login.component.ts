import { Component, OnInit } from '@angular/core';
import {faUser, faUnlock} from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormBuilder,FormControl ,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  public faUser = faUser;
  public faUnlock = faUnlock;

  public uiInvalidCredential = false;


  loginform = new FormGroup({
    emailid : new FormControl('',[
      Validators.required,
      Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")]),
    password : new FormControl('',[
      Validators.required,
      Validators.pattern("(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z]).{8,}$")])
    }); 
    
    get eid(){
      return this.loginform.get('emailid')
      }
    
      get pass(){
      return this.loginform.get('password')
      }
    
    

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
    ) { }

  ngOnInit(): void {
  }
  async loginProcessHere() {
    const data = this.loginform.value;

    // ajax call
    const url = 'http://localhost:3100/auth-admin';
    const result: any = await this.http.post(url, data).toPromise();
    if (result.opr) {
      sessionStorage.setItem('sid', 'true');
      this.router.navigate(['admin-index']);
    } else {
      this.uiInvalidCredential = true;
    }
  }
}
