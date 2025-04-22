import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quote } from '../../interfaces/quote';

@Injectable({
  providedIn: 'root',
})
export class MuralService {
  private readonly API = 'https://localhost:7192/quotes'

  constructor(private http: HttpClient) {}

  obterPensamentos(): Observable<Quote[]> {
    return this.http.get<Quote[]>(this.API); //eniva a url
  }

  obterPensamentosPorPagina(pagina: number, quantidade: number): Observable<Quote[]>{
    const url = `${this.API}/${pagina}/${quantidade}`
    return this.http.get<Quote[]>(url);
  }

  editarPensamento(quote: Quote): Observable<Quote> {
    const url = `${this.API}/${quote.id}`;
    return this.http.put<Quote>(url, quote);
  }

}
