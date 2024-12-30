import { Routes } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';

export const routes: Routes = [ 
    {path: '', redirectTo: 'Login', pathMatch: 'full'},
    {path: 'Home', loadComponent:() => import('./nav/nav.component').then(m => m.NavComponent),
        children: [
        {path: 'Add', loadComponent:() => import('./add/add.component').then(m => m.AddComponent)},
        {path: 'View', loadComponent:() => import('./view/view.component').then(m => m.ViewComponent)}
    ], canActivate:[AuthGuardService]},
    {path: 'Login', loadComponent:() => import('./login/login.component').then(m => m.LoginComponent)},
    {path: 'Register', loadComponent:() => import('./register/register.component').then(m => m.RegisterComponent)}
];
