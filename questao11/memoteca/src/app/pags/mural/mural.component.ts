import { MuralService } from './../../shared/services/mural/mural.service';
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../shared/components/header/header.component";
import { FooterComponent } from "../../shared/components/footer/footer.component";
import { CardComponent } from "../../shared/components/card/card.component";
import { Quote } from '../../shared/interfaces/quote';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mural',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CardComponent, CommonModule, RouterLink],
  templateUrl: './mural.component.html',
  styleUrl: './mural.component.css'
})

export class MuralComponent implements OnInit {
  pagina: number = 1;
  quantidade: number = 9;
  quotes: Quote[] = [];

  constructor(private muralService: MuralService) {}
  ngOnInit(): void {
    this.listaPensamentosPagina(this.pagina, this.quantidade);
  }

  listaPensamentosPagina(pagina: number, quantidade: number) {
    this.muralService.obterPensamentosPorPagina(pagina,quantidade).subscribe(listaPensamentos => {
      if(listaPensamentos.length === 0 && this.pagina !== 1) {
        this.pagina = this.pagina-1;
        //next
      } else {
        this.quotes = listaPensamentos;
      }
      console.log(this.quotes)
    })
  }



}
