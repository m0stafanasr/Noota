import { Routes } from '@angular/router';
import { MainLayout } from './main/components/main-layout/main-layout';

export const routes: Routes = [
    {path:'', redirectTo: 'home', pathMatch: 'full'},
    {path:'home', component: MainLayout, children: []},
];
