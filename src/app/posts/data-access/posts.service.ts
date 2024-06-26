import {
  collectionData,
  collection,
  startAfter,
  Firestore,
  orderBy,
  query,
  limit,
} from '@angular/fire/firestore';
import { assignTypes } from '@core/utils/assign-type.util';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { PostsListConfig } from './models/posts.model';
import { Post } from './interfaces/post.interface';

const PATH = 'posts';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private readonly firestore = inject(Firestore);
  private readonly collection = collection(this.firestore, PATH).withConverter(assignTypes<Post>());

  getPosts$(config: PostsListConfig): Observable<Post[]> {
    const { limit: qLimit, page, pageLastElements } = config;
    let postCollection;
    if (page === 1) {
      postCollection = query(this.collection, orderBy('date', 'desc'), limit(qLimit));
    } else {
      const { date } = pageLastElements.get(page - 1)!;
      postCollection = query(this.collection, orderBy('date', 'desc'), limit(qLimit), startAfter(date));
    }
    return collectionData(postCollection, { idField: 'id' });
  }
}
