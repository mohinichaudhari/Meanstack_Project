import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { FormGroup,FormBuilder, FormControl ,Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-report-stud',
  templateUrl: './report-stud.component.html',
  styleUrls: ['./report-stud.component.css']
})
export class ReportStudComponent implements OnInit {
  record : any =[];
  constructor(
      private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) { }

  async ngOnInit ()  {
    if(!sessionStorage.getItem('sid')){
      this.router.navigate(['student-login'])
  }
  var stud = sessionStorage.getItem('student_id')
  console.log(stud);
  const data={studentid:stud}
  const url = 'http://localhost:3100/report1';
  const result : any = await this.http.post(url,data).toPromise();
  this.record=result;
  console.log(result);
  }
  signout(){
    sessionStorage.removeItem('sid');
      this.router.navigate(['student-login']);
  }

}
