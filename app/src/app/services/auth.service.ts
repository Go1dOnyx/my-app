import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable} from "rxjs";
import { Router, RouterOutlet } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private url = 'http://localhost:5268/api/Account';

    constructor(private httpClient: HttpClient, private router: Router){}

    async login(userEmail: string, password: string): Promise<Observable<any>> {
        try {
            const body = {userEmail, password}
            const response = await this.httpClient.post<any>(`${this.url}/login/`, body);
            this.router.navigate(['/home']);
            return response;
        }
        catch(error) {
            console.log('Could not login - AuthService', error);
            throw error;
        }
    }

}