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
  @Input() pensamento : string = 'alo alo graças a deus';
  @Input() autor : string = 'ines brasil';
  @Input() telaInicial: boolean = true;
}
