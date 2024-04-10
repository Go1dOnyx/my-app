import { DecimalPipe } from "@angular/common";

export interface Payment {
    PaymentId: number,
    UserID: number,
    CardNum: number | null,
    CardholderName: string ,
    ExpirationDate: any,
    SecurityNum: number,
    Amount: number,
    CardType: string| null,
    Status: boolean
}