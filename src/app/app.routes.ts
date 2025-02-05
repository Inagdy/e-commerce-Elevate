import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:"" ,redirectTo:"home",pathMatch:"full"},

    {path:"home", loadComponent: () => import('./features/pages/home/home.component').then((c) => c.HomeComponent)},
    {path:"login", loadComponent: () => import('./features/pages/loginpage/loginpage.component').then((c) => c.LoginpageComponent)},
    {path:"regester", loadComponent: () => import('./features/pages/regsterpage/regsterpage.component').then((c) => c.RegsterpageComponent)},
    {path:"forgetpassword", loadComponent: () => import('./features/pages/forgetpasspageurl/forgetpasspageurl.component').then((c) => c.ForgetpasspageurlComponent)}


];
