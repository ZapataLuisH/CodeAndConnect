import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { CertificacionesComponent } from './certificaciones/certificaciones.component';
import { ContactoComponent } from './contacto/contacto.component';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'certificaciones', component: CertificacionesComponent },
  { path: 'contacto', component: ContactoComponent },
];
