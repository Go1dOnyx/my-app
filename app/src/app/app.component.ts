
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

  async login(): Promise<any> {
    try {
      await this.authService.login(this.userEmail, this.password);
      console.log('Success');
    }
    catch(error) {
      console.error('Error in login:', error);
      console.log('Failure');
    }
  }
}
