import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private url = 'http://localhost:5268/api/Account';

    constructor(private httpClient: HttpClient){}

    login(userEmail: string, password: string): Observable<any> {
        return this.httpClient.post<any>(`${this.url}/login`, {userEmail, password});
    }
    update() {

    }
    delete() {

    }
    getUser() {

    }
    getAllUsers() {

    }
}