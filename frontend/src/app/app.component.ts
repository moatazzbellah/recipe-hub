import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecipesComponent } from './Components/recipes/recipes.component';
import { RecipeDetailsComponent } from './Components/recipe-details/recipe-details.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RecipesComponent, RecipeDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
