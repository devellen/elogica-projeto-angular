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

}
