import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../Services/recipes.service';
import { Recipe } from '../../Models/recipe';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private recipesService: RecipesService) {}

  ngOnInit(): void {
  this.recipesService.getAllRecipes().subscribe((data) => {
    this.recipes = data;
  });
}
}
