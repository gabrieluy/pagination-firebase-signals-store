import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { ButtonModule } from 'primeng/button';

import { PaginatorConfig } from './interfaces/paginator.config';

@Component({
  selector: 'paginator',
  standalone: true,
  imports: [ButtonModule],
  template: `
    @if ($paginator().show) {
      <div class="flex justify-content-between">
        <p-button
          icon="pi pi-arrow-left"
          label="Previous"
          [disabled]="!$paginator().hasPreviousPage"
          [rounded]="true"
          (onClick)="onPrevClicked.emit()"
          [raised]="true"></p-button>

        <p-button
          icon="pi pi-arrow-right"
          label="Next"
          [disabled]="!$paginator().hasNextPage"
          [rounded]="true"
          [raised]="true"
          (onClick)="onNextClicked.emit()"></p-button>
      </div>
    }
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginatorComponent {
  $paginator = input.required<PaginatorConfig>();
  onNextClicked = output<void>();
  onPrevClicked = output<void>();
}
