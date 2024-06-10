import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { PaginatorComponent } from '@core/ui/paginator/paginator.component';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';

import { PostCardSkeletonComponent } from './ui/post-card-skeleton/post-card-skeleton.component';
import { PostCardComponent } from './ui/post-card/post-card.component';
import { PostsListStore } from '../../data-access/posts-list.store';

@Component({
  selector: 'posts-list',
  standalone: true,
  template: `
    <div class="w-full pt-6">
      <div class="flex justify-content-center grid grid-cols-4 gap-4 mb-4">
        @if (!$isLoading()) {
          @for (post of $posts().values(); track post.id) {
            <post-card
              class="w-full max-w-20rem"
              [$post]="post" />
          }
          <paginator
            class="w-full"
            (onNextClicked)="goToNextPage()"
            (onPrevClicked)="goToPrevPage()"
            [$paginator]="listStore.paginator()" />
        } @else {
          <post-card-skeleton [$quantity]="listStore.listConfig.limit()" />
        }
      </div>
    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ButtonModule,
    RouterLink,
    PostCardComponent,
    PostCardSkeletonComponent,
    PaginatorComponent,
  ],
})
export class PostsListComponent {
  readonly listStore = inject(PostsListStore);

  $posts = this.listStore.posts.entities;
  $isLoading = computed(() => this.listStore.status() === 'loading');
  $listConfig = this.listStore.listConfig;

  constructor() {
    this.listStore.loadPosts(this.$listConfig());
  }

  goToNextPage() {
    this.listStore.loadPosts({ ...this.$listConfig(), page: this.$listConfig.page() + 1 });
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }

  goToPrevPage() {
    this.listStore.loadPosts({ ...this.$listConfig(), page: this.$listConfig.page() - 1 });
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }
}
