import { Routes } from '@angular/router';
import { NotFoundComponent } from './components/pages/404/not-found.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
