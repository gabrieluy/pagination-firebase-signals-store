import { Post } from "./post.interface";

export interface PostsListConfig {
  limit: number;
  page: number;
  pageLastElements: Map<number, Post>;
}