import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { HomeTesteComponent } from './components/pages/home-teste/home-teste.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent},
    { path: 'hometeste', component: HomeTesteComponent}
];
