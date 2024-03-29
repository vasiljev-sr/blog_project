export {
  articlesReducer,
  articlesActions,
} from './model/slice/articleDetailsSlice';
export { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';
export { ArticlesSchema } from 'entities/Article/model/types/articleDetailsSchema';
export { getArticleDetails } from './model/selectors/articleDetails';

export type { Article, ArticleView } from './model/types/article';

export { ArticleList } from './ui/ArticleList/ArticleList';
