 import { Component } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";

 @Component({
    selector: 'register-app',
    templateUrl: './register.component.html',
    styleUrl: './register.component.css'
 })

 export class RegisterComponent {
    errorMessage: string = ''; //Holds error message 
    
     //Since the userId is automatically assigned, we dont need to include it and it can also cause interference
     //This can prevent the user from creating a new account and getting a 400 bad request response
    registerForm = { 
        username: '',
        email: '',
        password: '',
        firstName: '',
        middleName: '',
        lastName: '',
        status: true
    };

    constructor(private authService: AuthService, private router: Router) {}
    
    async register() {
            //handle if the form that was submitted is valid
            this.authService.register(this.registerForm).subscribe(
                //handle API response through service
                response => {
                    this.router.navigate(['/home']);
                    console.log('New user: ', response);
                },
                error => {
                    //if user could not be successfully created
                    this.errorMessage = error.error;
                }
            );
    }
 }