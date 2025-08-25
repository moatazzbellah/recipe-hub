import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../Services/recipes.service';
import { Recipe } from '../../Models/recipe';

@Component({
  selector: 'app-recipes',
  standalone: true,
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private recipesService: RecipesService) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token');
  if (!token) {
    this.recipesService.getAllRecipes().subscribe((data) => {
      this.recipes = data;
    });
  }
  }
}
