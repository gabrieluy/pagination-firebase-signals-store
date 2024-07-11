import { Post } from "./post.interface";

export interface Filters {
  author?: string;
}

export interface PostsListConfig {
  limit: number;
  page: number;
  pageLastElements: Map<number, Post>;
  filters?: Filters;
}