export { ArticleDetailsPageLazy as ArticleDetailsPage } from './ui/ArticleDetailsPageLazy';
export type { ArticleDetailsCommentsSchema } from './model/types/ArticleDetailsCommentsSchema';
export {
  articleCommentsActions,
  articleCommentsReducer,
  getArticleComments,
} from './model/slices/articleDetailsCommentsSlice/articleDetailsCommentsSlice';
