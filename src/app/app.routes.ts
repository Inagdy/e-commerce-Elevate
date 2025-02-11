import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:"" ,redirectTo:"home",pathMatch:"full"},

    {path:"home", loadComponent: () => import('./features/pages/home/home.component').then((c) => c.HomeComponent)},
    {path:"login", loadComponent: () => import('./features/pages/login-page/login-page.component').then((c) => c.LoginPageComponent)},
    {path:"regester", loadComponent: () => import('./features/pages/regsterpage/regsterpage.component').then((c) => c.RegsterpageComponent)},
    {path:"forgetpassword", loadComponent: () => import('./features/pages/forget-password-page/forget-password-page.component').then((c) => c.ForgetPasswordPageComponent)}


];
