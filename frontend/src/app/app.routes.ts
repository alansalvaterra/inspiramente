import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { NovoPensamentoComponent } from './components/pages/novo-pensamento/novo-pensamento.component';
import { EditarPensamentoComponent } from './components/pages/editar-pensamento/editar-pensamento.component';
import { ExcluirPensamentoComponent } from './components/pages/excluir-pensamento/excluir-pensamento.component';
import { FavoritosPensamentoComponent } from './components/pages/favoritos-pensamento/favoritos-pensamento.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent},
    { path: 'favoritos', component: FavoritosPensamentoComponent},
    { path: 'novopensamento', component: NovoPensamentoComponent},
    { path: 'editarpensamento/:id', component: EditarPensamentoComponent},
    { path: 'excluirpensamento/:id', component: ExcluirPensamentoComponent},
];
