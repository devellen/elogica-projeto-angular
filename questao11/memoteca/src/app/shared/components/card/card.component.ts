import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Quote } from '../../interfaces/quote';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() modelo : number = 0;
  @Input() pensamento : string = '';
  @Input() autor : string = '';
  @Input() id?: number;
  @Input() telaInicial: boolean = true;

  constructor(private router: Router) {}

  editar() {
    let pensamento: Quote = {
      modelo: this.modelo,
      autor: this.autor,
      pensamento: this.pensamento,
      id: this.id ? this.id : 0
    }
    this.router.navigateByUrl('/formulario');
  }
}
