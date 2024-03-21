import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { Observable } from "rxjs";
import { User } from "../services/user";
import { UrlSegment } from "@angular/router";

@Component({
    selector: "app-home",
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
    public userModel: User = {} as User; //Initilize an empty interface instance

    constructor(private authService: AuthService){}

    ngOnInit(): void {
        this.getInfo();
    }

    getInfo() {
        this.authService.getUserById().subscribe(user => {
                this.userModel = user;
                console.log("id: ", this.userModel.UserId);
                console.log("User info: ", this.userModel);
        }, 
        error => {
            console.log("Couldn't recieve user: ", error.error);
        });
    }
}