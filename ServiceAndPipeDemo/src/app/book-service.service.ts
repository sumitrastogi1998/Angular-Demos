import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../node_modules/rxjs';
import { IBook } from './books';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  private _url = "/assets/data/booklist.json";
  constructor(private http:HttpClient) { 

  }

  getBooks(): Observable<IBook[]>
  {
    return this.http.get<IBook[]>(this._url);


  }
}
