
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';
  readonly getAPI = 'http://localhost:5268/api/Account';

  constructor(private modalService: NgbModal, private http: HttpClient) {
  }

  public open(modal: any): void{
    this.modalService.open(modal);
  }

  authUser() {
    return this.http.get(this.getAPI+'/login');
  }
}
