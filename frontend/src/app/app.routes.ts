import { Routes } from '@angular/router';
import { RecipesComponent } from './Components/recipes/recipes.component';

export const routes: Routes = [
  {
    path: 'recipes',
    component: RecipesComponent,
  },
  {
    path: '',
    redirectTo: 'recipes',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'recipes',
  },
];
