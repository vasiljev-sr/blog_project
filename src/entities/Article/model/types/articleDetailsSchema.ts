import { Article } from 'entities/Article/model/types/article';

export interface ArticlesSchema {
  error?: string;
  isLoading: boolean;
  data?: Article;
}