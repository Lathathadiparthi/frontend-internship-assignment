import { Component, Input } from '@angular/core';
import { debounceTime } from 'rxjs';
import { Doc } from 'src/app/core/models/book-response.model';
import { SearchbooksService } from 'src/app/core/services/searchbooks.service';


@Component({
  selector: 'front-end-internship-assignment-display-books',
  templateUrl: './display-books.component.html',
  styleUrls: ['./display-books.component.scss'],
})
export class DisplayBooksComponent {
  Displaybooks:Doc[]=[];

   @Input() queryValue='';
  //  isLoading: boolean = true;
  TotalBooks=0;
  page=0;
  pageSize=10;

   constructor(private _Booksservice:SearchbooksService  ) {}

  DisplayBooks() {
    this._Booksservice.DisplayAllBooks(this.queryValue).subscribe((data) => {
      console.log(data);
       this.Displaybooks=data?.docs;
       this.TotalBooks=data.docs.length;
       console.log(this.DisplayBooks);
       this.page=this.TotalBooks/10;
       console.log(this.TotalBooks);
       
      // this.isLoading = false;
    });
  }

  ngOnChanges(): void {
      this.DisplayBooks();
    
  }

}
