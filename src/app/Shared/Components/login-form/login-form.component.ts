import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {

  @Output() emailEvent = new EventEmitter<string>();

private testForm : FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.testForm = this.formBuilder.group({
      email: ['', Validators.required]
    })
   }

  ngOnInit() {}

  submit(){
      const email = this.testForm.value.email;
      this.emailEvent.emit(email); 
  }

}
