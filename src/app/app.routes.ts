import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:"" ,redirectTo:"home",pathMatch:"full"},
    {path:"home", loadComponent: () => import('./features/componet/home/home.component').then((c) => c.HomeComponent)}

];
