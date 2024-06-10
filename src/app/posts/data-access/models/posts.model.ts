import { StatusType } from '@core/types/status-type.interface';

import { Post } from '../interfaces/post.interface';

export interface Filters {
  author?: string;
}

export type ListType = 'ALL' | 'USER';

export interface PostsListConfig {
  type: ListType;
  limit: number;
  page: number;
  pageLastElements: Map<number, Post>;
  filters?: Filters;
}

export interface Posts {
  entities: Post[];
  entitiesCount: number;
}

export interface PostListState {
  listConfig: PostsListConfig;
  posts: Posts
  status: StatusType;
}

export const postListInitialState: PostListState = {
  listConfig: {
    type: 'ALL',
    page: 1,
    limit: 4,
    filters: {},
    pageLastElements: new Map<number, Post>(),
  },
  posts: {
    entities: [],
    entitiesCount: 0,
  },
  status: 'loading',
};
