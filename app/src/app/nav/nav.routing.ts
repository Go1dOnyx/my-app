import {Routes, RouterModule} from '@angular/router';

import { HomeComponent } from '../home';
import { LoginComponent } from '../login';

const routes: Routes = [
    {path: '', component: LoginComponent },
    {path: 'home', component: HomeComponent}
]; 

export const routesNav = RouterModule.forRoot(routes);