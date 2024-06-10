import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () => import('./posts.component').then(m => m.PostsComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/posts-list/posts-list.component').then(
            m => m.PostsListComponent
          ),
      },
    ],
  },
] as Routes;
