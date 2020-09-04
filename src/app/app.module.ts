import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StudentSignupComponent } from './student-signup/student-signup.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';
import { ForgotComponent } from './forgot/forgot.component';
import { ErrorComponent } from './error/error.component';
import { HeaderComponent } from './header/header.component';
import { IndexComponent } from './index/index.component';
import { StudentIndexComponent } from './student-index/student-index.component';
import { AdminIndexComponent } from './admin-index/admin-index.component';
import { ReportComponent } from './report/report.component';
import { ReportStudComponent } from './report-stud/report-stud.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentLoginComponent,
    StudentSignupComponent,
    AdminLoginComponent,
    AdminSignupComponent,
    ForgotComponent,
    ErrorComponent,
    HeaderComponent,
    IndexComponent,
    StudentIndexComponent,
    AdminIndexComponent,
    ReportComponent,
    ReportStudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
