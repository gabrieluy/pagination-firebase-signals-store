import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Post } from 'app/posts/data-access/interfaces/post.interface';
import { DatePipe } from '@angular/common';
import { ChipModule } from 'primeng/chip';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'post-card',
  standalone: true,
  imports: [DatePipe, TagModule, ChipModule],

  template: `
    <div
      class="shadow-4 hover:shadow-6 surface-card hover:bg-blue-50 p-2 h-full border-round"
      tabindex="0">
      <div class="flex flex-wrap">
        <span class="text-gray-500 text-xs w-full">
          {{ $post().date | date: 'medium' }}
        </span>
        <h2 class="font-bold text-2xl w-full">
          {{ $post().title }}
        </h2>
        <p>{{ $post().description }}</p>
      </div>    
    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostCardComponent {
  $post = input.required<Post>();
}
