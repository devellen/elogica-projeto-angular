import { MuralService } from './../../shared/services/mural/mural.service';
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../shared/components/header/header.component";
import { FooterComponent } from "../../shared/components/footer/footer.component";
import { CardComponent } from "../../shared/components/card/card.component";
import { Quote } from '../../shared/interfaces/quote';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mural',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CardComponent, CommonModule],
  templateUrl: './mural.component.html',
  styleUrl: './mural.component.css'
})

export class MuralComponent implements OnInit {
  quotes: Quote[] = [];

  constructor(private muralService: MuralService) {}
  ngOnInit(): void {
    this.muralService.obterPensamentos().subscribe(listaPensamentos => {
      this.quotes = listaPensamentos;
    })
  }

}
