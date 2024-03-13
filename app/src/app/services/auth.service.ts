import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private url = 'http://localhost:5268/api/Account';

    constructor(private httpClient: HttpClient){}

    async login(userEmail: string, password: string): Promise<any> {
        try {
            const body = {userEmail, password}
            const response = await this.httpClient.post<any>(`${this.url}/login`, body)
                .pipe(
                    map((response: any) => response),
                    catchError((error: any) => {
                        console.error('Error during login:', error);
                        throw error;
                    })
                ).toPromise();
            return response;
        }
        catch(error) {
            console.log('Could not login', error);
            throw error;
        }
    }

}