import {Routes, RouterModule} from '@angular/router';

import { HomeComponent } from '../home';
import { LoginComponent } from '../login';
import { RegisterComponent } from '../register';

const routes: Routes = [
    {path: '', component: LoginComponent },
    {path: 'home', component: HomeComponent},
    {path: 'register', component: RegisterComponent}
]; 

export const routesNav = RouterModule.forRoot(routes);