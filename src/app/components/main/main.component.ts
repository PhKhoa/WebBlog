import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, mergeMap } from 'rxjs';
import { Article } from 'src/app/model/article';
import { Store } from '@ngrx/store';
import { ApiService } from 'src/app/services/api.service';
import { ArticleState } from 'src/app/ngrx/states/data.state';
import * as ArticleActions from '../../ngrx/actions/data.actions';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnDestroy{
  articleList: Article[] = [];

  articleList$: Observable<Article[]> = this.store.select('article','articleList');

  constructor(private apiService:ApiService, private store:Store<{article:ArticleState}>) {
    this.store.dispatch(ArticleActions.getArticle());
    // this.apiService.getArticle().pipe(
    //   mergeMap((articles)=>{
    //     console.log(articles);
    //     this.articleList = [...articles];
    //     console.log(this.articleList);
    //     return this.articleList;
    //   })
    // ).subscribe((value)=>{
    //   console.log(value);
    // })
   }
   ngOnDestroy(): void {
    console.log('home component destroyed');
  }
  //  ngOnInit(): void {
  //   this.articleList$.subscribe((articleList) => {
  //     console.log(articleList.length);
  //     if (articleList.length > 0) {
        
  //       console.log(articleList);
  //     }
  //   });
  // }

}
