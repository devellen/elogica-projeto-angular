import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MensagemErroComponent, verificaData } from "../mensagem-erro/mensagem-erro.component";
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-formulario-validacao',
  standalone: true,
  imports: [MensagemErroComponent, ReactiveFormsModule, NgxMaskDirective],
  templateUrl: './formulario-validacao.component.html',
  styleUrl: './formulario-validacao.component.css'
})
export class FormularioValidacaoComponent implements OnInit {
  contatoForm!: FormGroup;

  ngOnInit() {
    this.inicializarFormulario();
  }

  inicializarFormulario() {
    this.contatoForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      telefone: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      aniversario: new FormControl('', [Validators.required, verificaData()]),
    })
  }

  obterControle(nome: string): FormControl {
    const control= this.contatoForm.get(nome);
    if(!control) throw new Error(`controle de form não encontrado ${nome}`);
    return control as FormControl;
  }
}
