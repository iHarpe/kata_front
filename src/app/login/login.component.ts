import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from '../services/session.service';
import { CommonModule } from '@angular/common';
import { UsersService } from '../services/users.service';
import { Users } from '../models/users';
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.sass'
})
export class LoginComponent implements OnInit{

  ngOnInit(): void {}

  createGroupForm() {
    return new FormGroup({
      userid: new FormControl('', [Validators.required, Validators.email]), 
      password: new FormControl('', [Validators.required,Validators.minLength(8)]),
    });
  }

  loguinForm: FormGroup;
  usuario?: Users;

  constructor(private router: Router, public sessionService: SessionService, private userService: UsersService){
    this.loguinForm = this.createGroupForm();
  }

  login() {
    if (this.loguinForm.valid) {
        this.tryLogIn(this.loguinForm.get('userid')?.value, this.loguinForm.get('password')?.value)
    } else { 
      
    }
  }

  private tryLogIn(corr: string, pwd: string){
    this.userService.logInUser(corr,pwd).subscribe(data=> {
      this.usuario = data
      if(this.usuario != null){
        this.sessionService.sessionAct$.emit(true); 
        this.sessionService.userId$.emit(this.loguinForm.get('userid')?.value) 
        this.router.navigate(['home']); 
        }
    });
  }

  signIn() {
    this.router.navigate(['signin']); 
  }

  get userid() {
    return this.loguinForm.get('userid');
  }
  /**
   * Obtiene el valor del formulario para la contraseña
   */
  get password() {
    return this.loguinForm.get('password');
  }


}