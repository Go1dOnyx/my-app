import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Payment } from "./payment";
import { map } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class PaymentService {
    private url = 'http://localhost:5268/api/Payment';
    private paymentTokenId: any;

    constructor(private httpClient: HttpClient){}

    createPayment(paymentModel: any): Observable<any> {
        return this.httpClient.post<any>(`${this.url}/create/`, paymentModel)
        .pipe(
            map((response: any) => {
                return response;
            })
        );
    }
    updatePayment(paymentModel: any) {
        return this.httpClient.put<any>(`${this.url}/update/`, paymentModel)
        .pipe(
            map((response: any) => {
                return response;
            })
        )
    }
    deletePayment() {
        return this.httpClient.delete<any>(`${this.url}/` + this.paymentTokenId)
        .pipe(
            map((response: any) => {
                return response;
            })
        )
    }
    getPaymentById(): Observable<Payment[]>{
        return this.httpClient.get<Payment[]>(`${this.url}/` + this.paymentTokenId)
        .pipe(
            map((response: Payment[]) => {
                return response;
            })
        )
    }
    getAllPayment(): Observable<any>{
        return this.httpClient.get<any>(`${this.url}/`)
        .pipe(
            map((response: any) => {
                return response;
            })
        )
    }
    getAllFromId(id: any): Observable<[]>{
        //any[]?
        return this.httpClient.get<any>(`${this.url}/getall/` + id)
        .pipe(
            map((response: any) => {
                return response;
            })
        )
    }
    setPaymentToken(id: number): void{
        this.paymentTokenId = id;
    }
}