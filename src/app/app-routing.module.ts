import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgotComponent } from './forgot/forgot.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { StudentSignupComponent } from './student-signup/student-signup.component';
import { ErrorComponent } from './error/error.component';
import { IndexComponent } from './index/index.component';
import { StudentIndexComponent } from './student-index/student-index.component';
import { AdminIndexComponent } from './admin-index/admin-index.component';
import { ReportComponent } from './report/report.component';
import { ReportStudComponent } from './report-stud/report-stud.component';

const routes: Routes = [
  {path:'admin-index',component:AdminIndexComponent},
  {path:'index',component:IndexComponent},
  {path:'student-index',component:StudentIndexComponent},
  {path:'forgot', component:ForgotComponent},
  {path:'admin-login',component:AdminLoginComponent},
  {path:'admin-signup',component:AdminSignupComponent},
  {path:'student-login',component:StudentLoginComponent},
  {path:'student-signup',component:StudentSignupComponent},
  {path:'error',component:ErrorComponent},
  {path:'report', component:ReportComponent},
  {path:'stud-report',component:ReportStudComponent},
  {path:'',redirectTo:'/error',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
