import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'login-app',
    templateUrl: './login.component.html',
    styleUrl: './login.component.css'
})

export class LoginComponent {
    title = 'app';

    userAccount = {
    userEmail: '',
    password: ''
    };

    errorMessage: string = '';
    
    constructor(private authService: AuthService, private router: Router) {}

    async login() {
        this.authService.login(this.userAccount).subscribe(
          response => {
            this.router.navigate(['/home']);
            console.log('Login Success: ', response);
          },
          error => {
            this.errorMessage = error.error;
          }
        );
    }
}
