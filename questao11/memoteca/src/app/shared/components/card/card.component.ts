import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() modelo : number = 0;
  @Input() pensamento : string = '';
  @Input() autor : string = '';
  @Input() telaInicial: boolean = true;
}
