import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable} from "rxjs";
import { map } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private url = 'http://localhost:5268/api/Account';
    public tokenID: any; //default null 

    constructor(private httpClient: HttpClient){}

    login(credentials: any): Observable<any> {
        return this.httpClient.post<any>(`${this.url}/login/`, credentials);
    }
    register(userModel: any): Observable<any> {
        return this.httpClient.post<any>(`${this.url}/register/`, userModel);
    }
    getUserById(): Observable<any> {
        return this.httpClient.get<any>(`${this.url}/${localStorage.getItem('userID')}`)
        .pipe(
            map((response: any) => {
                return response;
            })
        );
    }
    getAllUsers(): Observable<any>{
        return this.httpClient.get<any>(`${this.url}`)
        .pipe(
            map((response: any)=> {
                return response;
            })
        );
    }
    setAuthTokenId(id: number): void {
        this.tokenID = id;
    }
    logOutUser(): void {

    }
}