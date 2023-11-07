import { User } from 'entities/User';

export type ArticleBlockTypes = 'TEXT' | 'CODE' | 'IMAGE';
export interface ArticleBlockBase {
  id: string;
  type: ArticleBlockTypes;
}
export interface ArticleImageBlock extends ArticleBlockBase {
  type: 'IMAGE';
  src: string;
  title: string;
}
export interface ArticleCodeBlock extends ArticleBlockBase {
  type: 'CODE';
  code: string;
}
export interface ArticleTextBlock extends ArticleBlockBase {
  type: 'TEXT';
  title: string;
  paragraphs: string[];
}

export type ArticleBlock =
  | ArticleImageBlock
  | ArticleCodeBlock
  | ArticleTextBlock;
export interface Article {
  id: string;
  title: string;
  subtitle: string;
  user: User;
  img: string;
  views: number;
  createdAt: string;
  type: string[];
  blocks: ArticleBlock[];
}

export type ArticleView = 'gallery' | 'list';
