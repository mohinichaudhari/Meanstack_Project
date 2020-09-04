import { Component, OnInit } from '@angular/core';
import {faUser, faUnlock, faBaby} from '@fortawesome/free-solid-svg-icons';
import { FormGroup,FormBuilder,  FormControl ,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent implements OnInit {
  public faUser = faUser;
  public faUnlock = faUnlock;

  public uiInvalidCredential = false;

  loginform = new FormGroup({
    studentid : new FormControl('',[
      Validators.required,
      Validators.pattern("^[0-9]{12}$")]),
    password : new FormControl('',[
      Validators.required,
      Validators.pattern("(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z]).{8,}$")])
    });
    
  get studid(){
	return this.loginform.get('studentid')
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
    const url = 'http://localhost:3100/auth-stud';
    const result: any = await this.http.post(url, data).toPromise();
    if (result.opr) {
      sessionStorage.setItem('student_id',data.studentid)
      sessionStorage.setItem('sid', 'true');
      this.router.navigate(['stud-report']);
    } else {
      this.uiInvalidCredential = true;
    }
  }
  
}
