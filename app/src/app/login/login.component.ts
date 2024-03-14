import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

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
    
    constructor(private authService: AuthService) {}

    async login(): Promise<any> {
        try {
          await this.authService.login(this.userAccount.userEmail, this.userAccount.password);
          console.log('Success');
        }
        catch(error) {
          console.error(`Error in login: ${this.userAccount.userEmail} + ${this.userAccount.password}`, error);
          console.log('Failure');
        }
      }
}