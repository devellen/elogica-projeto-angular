import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Quote } from '../../interfaces/quote';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

    private readonly API = 'https://localhost:7192/quotes'

    constructor(private httpclient: HttpClient) { }

  salvarPensamento(quote : Quote) : Observable<Quote> {
    return this.httpclient.post<Quote>(this.API, quote);
  }

  editarPensamento(quote: Quote): Observable<Quote> {
    const url = `${this.API}/${quote.id}`;
    return this.httpclient.put<Quote>(url, quote)
  }


  editarOuSalvarPensamento(quote: Quote): Observable<Quote> {
    if(quote.id) {
      return this.editarPensamento(quote)
    } else {
      return this.salvarPensamento(quote)
    }
  }

}
