import { Component } from '@angular/core';
import { BookServiceService } from './book-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public books=[];

  public searchById;
  public searchByTitle: string;
  public searchByAuthor;
  public searchByYear;

  constructor(private _bookService: BookServiceService){

  }

  ngOnInit(){
    this._bookService.getBooks().subscribe(data => this.books = data);
  }
}
