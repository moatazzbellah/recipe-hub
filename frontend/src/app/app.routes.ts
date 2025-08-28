import { Routes } from '@angular/router';
import { RecipesComponent } from './Components/recipes/recipes.component';
import { AuthComponent } from '../app//Components//auth//auth.component';
import { RecipeDetailsComponent } from './Components/recipe-details/recipe-details.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';

export const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: 'recipe/:id', component: RecipeDetailsComponent},
  { path: '', redirectTo: 'recipes', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];
