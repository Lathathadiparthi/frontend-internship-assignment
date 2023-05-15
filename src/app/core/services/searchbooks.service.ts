import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api.service';
import { Responce1 } from 'src/app/core/models/book-response.model';

@Injectable({
  providedIn: 'root'
})
export class SearchbooksService {
  constructor(private apiService: ApiService) {}

  DisplayAllBooks(query: string): Observable<Responce1> {
     const limit = 10;    

   return this.apiService.get(`/search.json?q=${query.toLowerCase().split(' ').join('_')}.json`);
  }
}
