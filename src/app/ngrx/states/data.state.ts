import { Article } from "src/app/model/article";

export interface ArticleState{
    isLoading: boolean;
    isSuccess: boolean;
    articleList: Article[];
    error:string;
}