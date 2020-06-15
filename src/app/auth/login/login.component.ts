import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  form: FormGroup

  constructor(private fb:FormBuilder,
              private router: Router) { 

                this.form = this.fb.group({
                  user: ['', Validators.required],
                  password: ['', Validators.required]
                })
              }

  login() {
    const val = this.form.value

    if (val.user && val.password) {
      this.router.navigateByUrl('/home')
    }else {
      this.router.navigateByUrl('/')
    }
  }

  ngOnInit(): void {
  }

}
