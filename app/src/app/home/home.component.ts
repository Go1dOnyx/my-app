import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { PaymentService } from "../services/payment.service";
import { Payment } from "../services/payment";
import { User } from "../services/user";

@Component({
    selector: "app-home",
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
    public userModel: User = {} as User; //Initilize an empty interface instance
    public payModels: any = [];

    constructor(private authService: AuthService, private payService: PaymentService){}

    ngOnInit(): void {
        this.getUserInfo();
        this.getUserPayments();
    }

    getUserInfo() {
        this.authService.getUserById().subscribe(
            user => {
                    this.userModel = user;
            }, 
            error => {
                console.log("Couldn't recieve user: ", error.error);
        });
    }
    getUserPayments(){
        let userID = localStorage.getItem('userID');
        console.log('---');
        console.log(userID);
        console.log('---');
        this.payService.getAllFromId(userID).subscribe(
            payList => {
                this.payModels = payList.map( obj => ({
                    PaymentId: obj.PaymentId,
                    UserID: obj.UserID,
                    CardNum: obj.CardNum,
                    CardholderName: obj.CardholderName,
                    ExpirationDate: obj.ExpirationDate,
                    SecurityNum: obj.SecurityNum,
                    Amount: obj.Amount,
                    CardType: obj.CardType,
                    Status: obj.Status
                }));
            },
            error => {
                console.log("User Id: ", this.authService.tokenID);
                console.log("Couldn't recieve payments: ", error.error);
            }
        )
    }
}