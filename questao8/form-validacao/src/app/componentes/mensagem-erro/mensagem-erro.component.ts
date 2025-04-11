import { Component, Input } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

@Component({
  selector: 'app-mensagem-erro',
  standalone: true,
  imports: [],
  templateUrl: './mensagem-erro.component.html',
  styleUrl: './mensagem-erro.component.css',
})
export class MensagemErroComponent {
  @Input() control!: FormControl;
}

export function verificaData(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const hoje = new Date();
    const valor = new Date(control.value);

    hoje.setHours(0, 0, 0, 0);
    valor.setHours(0, 0, 0, 0);

    return valor > hoje ? { dataFutura: true } : null;
  }
}
