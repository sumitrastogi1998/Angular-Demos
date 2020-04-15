import { PipeTransform, Pipe } from '@angular/core';
import { IBook } from './books';

@Pipe({
    name: 'bookSearch'
})

export class BooksFilterPipe implements PipeTransform {
    transform(items: IBook[], searchById: number, searchByTitle: string, searchByAuthor: string, searchByYear: number) {
        if (items && items.length) {
            return items.filter(item => {
                if (searchById != undefined) {
                    if(searchById != item.Book_Id)
                        return false;
                }
                if (searchByTitle && item.Book_Title.toLowerCase().indexOf(searchByTitle.toLowerCase()) === -1) {
                    return false;
                }
                if (searchByAuthor && item.Book_Author.toLowerCase().indexOf(searchByAuthor.toLowerCase()) === -1) {
                    return false;
                }
                if (searchByYear != undefined) {
                    if(searchByYear != item.Book_Year_Of_Publish)
                        return false;
                }
                return true;
            })
        }
        else {
            return items;
        }
    }
}