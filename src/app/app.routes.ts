import { Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';

export const routes: Routes = [ 
    {path: '', redirectTo: 'Login', pathMatch: 'full'},
    {path: 'Home', component: NavComponent,
        children: [
        {path: 'Add', component: AddComponent},
        {path: 'View', component: ViewComponent}
    ]},
    {path: 'Login', component: LoginComponent},
];
