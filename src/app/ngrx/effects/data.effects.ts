import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ApiService } from "src/app/services/api.service";
import * as ArticleActions from '../actions/data.actions';
import { catchError, exhaustMap, map, of } from "rxjs";


@Injectable()
export class ArticleEffects{
    constructor(private apiService: ApiService, private actions$: Actions){}

    getArticle$ = createEffect(()=>
        this.actions$.pipe(
            ofType(ArticleActions.getArticle),
            exhaustMap(()=>
                this.apiService.getArticle().pipe(
                    map((articles)=>{
                        return ArticleActions.getArticleSuccess({articleList: articles});
                    }),
                    catchError((error)=> of(ArticleActions.getArticleFailure({error})))
                )
            )
        )
    );
}