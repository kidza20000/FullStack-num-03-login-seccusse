import { Component, OnInit } from '@angular/core';
import {  FormGroup,FormControl, Validators }   from '@angular/forms';
import { AuthService } from '../shared/services/auth.services';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
[x: string]: any;

  form!: FormGroup;

constructor(private auth: AuthService) {}


  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    })
  }
onSubmit() {
    this.auth.login(this.form.value).subscribe(
      () => console.log('Login Success'),
      error => {
        console.warn(error)
      }
    )
}

}
