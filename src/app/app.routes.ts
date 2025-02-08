import { Routes } from '@angular/router';
export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () =>
      import('./features/pages/home/home.component').then(
        (c) => c.HomeComponent
      ),
  },
  {
    path: 'categories',
    loadComponent: () =>
      import('./features/pages/categories/categories.component').then(
        (c) => c.CategoriesComponent
      ),
  },
];
