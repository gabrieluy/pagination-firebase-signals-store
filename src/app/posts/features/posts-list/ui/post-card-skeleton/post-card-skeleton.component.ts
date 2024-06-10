import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'post-card-skeleton',
  standalone: true,
  imports: [SkeletonModule],
  template: `
    <div class="flex justify-content-center grid grid-cols-4 gap-4">
      @for (i of $cardsArray(); track i) {
        <div class="border-round border-1 surface-border p-2 surface-card">
          <div class="flex mb-3">
            <p-skeleton width="150px" height="1rem" borderRadius="1rem"/>
          </div>
          <div class="my-4">
            <p-skeleton width="300px" height="1.5rem"/>
          </div>
          <div class="my-2">
            <p-skeleton width="300px" height="1rem"/>
          </div>
          <div class="my-2">
            <p-skeleton width="300px" height="1rem"/>
          </div>
          <div class="my-2">
            <p-skeleton width="300px" height="1rem"/>
          </div>
        </div>
      }
    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostCardSkeletonComponent {
  $quantity = input<number>(1);
  $cardsArray = computed(() => [...Array(this.$quantity()).keys()]);
}
