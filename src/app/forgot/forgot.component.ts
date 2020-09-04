import { Component, OnInit } from '@angular/core';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {

public faEnvelope = faEnvelope;
  constructor() { }

  ngOnInit(): void {
  }

}
