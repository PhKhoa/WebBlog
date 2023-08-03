import { createAction, props } from '@ngrx/store';
import { Article } from 'src/app/model/article';

export const getArticle = createAction('[Artilce] Get Article');
export const getArticleSuccess = createAction('[Artilce] Get Article Success', props<{articleList: Article[]}>());
export const getArticleFailure = createAction('[Artilce] Get Article Failure', props<{error: any}>());
