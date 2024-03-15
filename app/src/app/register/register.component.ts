 import { Component } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";

 @Component({
    selector: 'register-app',
    templateUrl: './register.component.html',
    styleUrl: './register.component.css'
 })

 export class RegisterComponent {
    userModel = {
        id: [null],
        username: '',
        email: '',
        pass: '',
        firstName: '',
        middleName: '',
        lastName: '',
    };

    errorMessage: string = '';

    constructor(private authService: AuthService, private router: Router) {}

    async register() {
        this.authService.register(this.userModel).subscribe(
            response => {
                this.router.navigate(['/home']);
                console.log('New user: ', response);
            },
            error => {
                this.errorMessage = error.error;
            }
        );
    }
 }