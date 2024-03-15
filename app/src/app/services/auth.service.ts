import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private url = 'http://localhost:5268/api/Account';

    constructor(private httpClient: HttpClient){}

     login(credentials: any): Observable<any> {
        return this.httpClient.post<any>(`${this.url}/login/`, credentials);
    }
    register(userModel: any): Observable<any> {
        return this.httpClient.post<any>(`${this.url}/register/`, userModel);
    }
    
}