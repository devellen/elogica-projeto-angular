import { Routes } from '@angular/router';
import { MuralComponent } from './pags/mural/mural.component';
import { FormComponent } from './pags/form/form.component';

export const routes: Routes = [
  {
    //caminho da rota e qual componente vai ser renderizado
    path: '', //index
    redirectTo: '/mural',
    pathMatch: 'full', //quando lida com caminhos vazios e redirecionamento, tem q vim essa prop
  },

  {
    path: 'mural',
    component: MuralComponent,
  },
  {
    path: 'formulario',
    component: FormComponent
  }
];
