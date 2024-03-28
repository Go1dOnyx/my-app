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
    public payModels: Payment[] = [];

    constructor(private authService: AuthService, private payService: PaymentService){}

    ngOnInit(): void {
        this.getUserInfo();
        this.getUserPayments();
    }

    getUserInfo() {
        this.authService.getUserById().subscribe(
            user => {
                    this.userModel = user;
                    console.log("id: ", this.userModel.UserId);
                    console.log("User info: ", this.userModel);
            }, 
            error => {
                console.log("Couldn't recieve user: ", error.error);
        });
    }
    getUserPayments(){
        this.payService.getAllFromId(this.authService.tokenID).subscribe(
            payList =>{
                this.payModels = payList;
                console.log("User Id: ", this.authService.tokenID);
                console.log("List : ", this.payModels);
            },
            error => {
                console.log("User Id: ", this.authService.tokenID);
                console.log("Couldn't recieve payments: ", error.error);
            }
        )
    }
}