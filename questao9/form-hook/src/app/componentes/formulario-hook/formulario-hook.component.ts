import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-hook',
  standalone: true,
  imports: [],
  templateUrl: './formulario-hook.component.html',
  styleUrl: './formulario-hook.component.css'
})
export class FormularioHookComponent implements OnDestroy {
  exibeForm: boolean = true;
  exibeMensagem: boolean = false;
  destruir() {
    this.exibeForm = false;
    this.exibeMensagem = true;

  }
  ngOnDestroy(): void {
    this.destruir();
  }
}
