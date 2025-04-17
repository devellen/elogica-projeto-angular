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

}
