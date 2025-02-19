import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: 'home', loadChildren:()=> import ('./pages/home/home.module').then (m => m.HomeModule)},
    {path: 'about', loadChildren:()=> import ('./pages/about/about.module').then (m => m.AboutModule)},
    {path: '', redirectTo: '/home', pathMatch: 'full'}
];
