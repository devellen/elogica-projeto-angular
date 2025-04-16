import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/components/header/header.component";
import { FooterComponent } from "../../shared/components/footer/footer.component";
import { CardComponent } from "../../shared/components/card/card.component";

@Component({
  selector: 'app-mural',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CardComponent],
  templateUrl: './mural.component.html',
  styleUrl: './mural.component.css'
})
export class MuralComponent {

}
