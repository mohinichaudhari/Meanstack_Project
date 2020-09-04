import { Component, OnInit } from '@angular/core';


import { FormGroup,FormBuilder, FormControl ,Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

record : any =[];

  loginform = new FormGroup({
    studentid : new FormControl('',[
      Validators.required,
      Validators.pattern("^[0-9]{12}$")]),
    });

    get studid(){
      return this.loginform.get('studentid')
      }



  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {
   }

  ngOnInit(): void {}

   async fetchdata(){
     const data = this.loginform.value;
     const url = 'http://localhost:3100/report';
     const result : any = await this.http.post(url, data).toPromise();
     this.record=result;
    console.log(result);
   }


}
