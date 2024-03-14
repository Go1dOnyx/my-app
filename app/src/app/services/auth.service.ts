import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private url = 'http://localhost:7074/api/Account';

    constructor(private httpClient: HttpClient){}

    async login(userEmail: string, password: string): Promise<any> {
        try {
            const body = {userEmail, password}
            const response = await this.httpClient.post<any>(`${this.url}/login`, body).toPromise();
            return response;
        }
        catch(error) {
            console.log('Could not login - AuthService', error);
            throw error;
        }
    }

}