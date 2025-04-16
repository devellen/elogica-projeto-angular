import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { CardComponent } from "../../shared/card/card.component";

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CardComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

}
