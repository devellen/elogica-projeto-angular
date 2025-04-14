import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioServiceService } from '../../services/usuario-service.service';

@Component({
  selector: 'app-lista-usuarios',
  standalone: true,
  imports: [],
  templateUrl: './lista-usuarios.component.html',
  styleUrl: './lista-usuarios.component.css'
})
export class ListaUsuariosComponent implements OnInit {
  @Input() nome : string = ''; //criando propriedade, para os dados renderizarem dinamicamente na tela
  @Input() status : string = '';

  usuarios: Usuario[] = [];

  constructor(private usuarioService: UsuarioServiceService) {

  }

  ngOnInit() {
    this.usuarioService.obterUsuarios().subscribe(listaUsuarios => {
      this.usuarios = listaUsuarios;
    })
  }
}
