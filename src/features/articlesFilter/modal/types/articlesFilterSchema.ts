import { SortOrder } from 'shared/lib/types/common';

export type ArticleSortField = 'title' | 'createdAt' | 'view';
export interface ArticlesFilterSchema {
  order: SortOrder;
  sort: ArticleSortField;
  search: string;
}
