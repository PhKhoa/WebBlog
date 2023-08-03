import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Article } from '../model/article';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getArticle(){
    return this.http.get<Article[]>(
      'https://social.runwayclub.dev/api/articles/latest'
    )
  }
}
