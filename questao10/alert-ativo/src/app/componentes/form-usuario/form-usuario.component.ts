import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UsuarioServiceService } from '../../services/usuario-service.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-form-usuario',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './form-usuario.component.html',
  styleUrl: './form-usuario.component.css'
})


export class FormUsuarioComponent {
  contatoForm!: FormGroup;

  constructor(private usuarioService: UsuarioServiceService,  private activatedRoute: ActivatedRoute) {

  }
  ngOnInit() {
    this.inicializarFormulario();
  }

  inicializarFormulario() {
    this.contatoForm = new FormGroup({
      nome: new FormControl(''),
      status: new FormControl(''),
    })
  }

  salvarContato() {
    const novoContato = this.contatoForm.value;

    this.usuarioService.salvarContato(novoContato).subscribe(() =>{
      this.contatoForm.reset();
    });


  }
}
