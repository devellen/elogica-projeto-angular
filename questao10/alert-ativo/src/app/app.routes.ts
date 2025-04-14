import { Routes } from '@angular/router';
import { FormUsuarioComponent } from './componentes/form-usuario/form-usuario.component';
import { ListaUsuariosComponent } from './componentes/lista-usuarios/lista-usuarios.component';

export const routes: Routes = [
  {
    //caminho da rota e qual componente vai ser renderizado
    path: '', //index
    redirectTo: '/formulario',
    pathMatch: 'full', //quando lida com caminhos vazios e redirecionamento, tem q vim essa prop
  },

  {
    path: 'lista-usuarios',
    component: ListaUsuariosComponent,
  },
  {
    path: 'formulario',
    component: FormUsuarioComponent,
  },
];
