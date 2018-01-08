import { Component, OnInit } from '@angular/core';
import { Login }    from '../login';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  lg = new Login(247000071, "administrator");

  submitted = false;

  onSubmit() {this.submitted = true;}

  newLogin(){
    this.lg = new Login(123456789,"")
  }

  ngOnInit() {}

}
