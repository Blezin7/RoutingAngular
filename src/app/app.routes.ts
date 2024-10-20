import { Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

export const routes: Routes = [
    {path: 'Add', component: AddComponent},
    {path: 'View', component: ViewComponent},
];
