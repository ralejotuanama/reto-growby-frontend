import { Routes } from '@angular/router';
import { LibrosComponent } from './components/libros/libros.component';
import { AutoresComponent } from './components/autores/autores.component';
import { PrestamosComponent } from './components/prestamos/prestamos.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'libros', component: LibrosComponent },
    { path: 'autores', component: AutoresComponent },
    { path: 'prestamos', component: PrestamosComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: '**', redirectTo: 'libros' },
   
  ];
