import { Routes } from '@angular/router';
import { RecipesComponent } from './Components/recipes/recipes.component';
import { AuthComponent } from '../app//Components//auth//auth.component';
import { RecipeDetailsComponent } from './Components/recipe-details/recipe-details.component';

export const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: 'recipes/:id', component: RecipeDetailsComponent},
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: '**', redirectTo: 'auth' },
];
