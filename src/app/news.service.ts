import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  currentArticle: any;
  constructor(private http: HttpClient) { }

  getNewsData(section: any, page: number, category?: any) {
    const COUNTRY_CODE = 'in';
    const categoryVal = (category) ? '&category=' + category : '';
    return this.http.get(`${environment.apiUrl}${section}?country=${COUNTRY_CODE}&pageSize=5&page=${page}&apiKey=${environment.apiKey}${categoryVal}`);
  }
}
