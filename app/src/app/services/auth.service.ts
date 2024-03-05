import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private url = 'http://localhost:5268';

    constructor(private httpClient: HttpClient){}

    login(userEmail: string, password: string) {
        return this.httpClient.post(`${this.url}/login`, {userEmail, password});
    }
}