
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';
  userEmail: string = '';
  password: string = '';

  constructor(private modalService: NgbModal, private authService: AuthService) {
  }

  public open(modal: any): void{
    this.modalService.open(modal);
  }

  login(): void{
    this.authService.login(this.userEmail, this.password)
    .subscribe(response =>{
      //Handle successful login 
      console.log('successful');
    }, error => {
      //Handle error
       console.log('error');
    });
  }
}
