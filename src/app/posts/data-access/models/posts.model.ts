import { StatusType } from '@core/types/status-type.interface';

import { PostsListConfig } from '../interfaces/post-list-config.interface';
import { Post } from '../interfaces/post.interface';

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
    page: 1,
    limit: 4,
    pageLastElements: new Map<number, Post>(),
  },
  posts: {
    entities: [],
    entitiesCount: 0,
  },
  status: 'loading',
};
