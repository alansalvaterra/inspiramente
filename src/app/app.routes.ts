import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { NovoPensamentoComponent } from './components/pages/novo-pensamento/novo-pensamento.component';
import { ExcluirPensamentoComponent } from './components/pages/excluir-pensamento/excluir-pensamento.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent},
    { path: 'novopensamento', component: NovoPensamentoComponent},
    { path: 'excluirpensamento/:id', component: ExcluirPensamentoComponent},
];
