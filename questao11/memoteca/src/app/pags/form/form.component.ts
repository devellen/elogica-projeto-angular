import { FormService } from './../../shared/services/form/form.service';
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { CardComponent } from '../../shared/components/card/card.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorMessageComponent } from "../../shared/components/error-message/error-message.component";

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    CardComponent,
    ReactiveFormsModule,
    ErrorMessageComponent
],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent implements OnInit {
  quoteForm!: FormGroup;

  constructor(
    private formService: FormService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.inicializarFormulario();
    if(history.state) { //chamo o objeto aqui na hora que carrega tela pra editar
      let pensamentoEditar = history.state;
      delete pensamentoEditar.navigationId;
      this.quoteForm.patchValue(pensamentoEditar);
      this.quoteForm.get("modelo")?.setValue(pensamentoEditar.modelo.toString());
      console.log(this.quoteForm)
    }
  }

  inicializarFormulario() {
    this.quoteForm = new FormGroup({
      pensamento: new FormControl('', Validators.required),
      modelo: new FormControl('', Validators.required),
      autor: new FormControl('', Validators.required),
    });
  }

  obterControle(nome: string): FormControl {
    const control= this.quoteForm.get(nome);
    if(!control) throw new Error(`controle de form não encontrado ${nome}`);
    return control as FormControl;
  }

  salvarQuote() {

    const novoQuote = this.quoteForm.value;
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    novoQuote.id = id ? parseInt(id) : 0;

    this.formService.editarOuSalvarPensamento(novoQuote).subscribe(() => {
      this.quoteForm.reset();
      this.router.navigateByUrl('/mural');
    });
  }

  cancelar() {
    this.quoteForm.reset(); //limpa o form
    this.router.navigateByUrl('/mural')
  }
}
