import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../Models/recipe';
import { RecipesService } from '../../Services/recipes.service';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent{
  recipes: Recipe[];

  constructor() {
    this.recipes = [{
      _id: '123',
      Image: 'assets/pexels-daniela-elena-tentis-118658-691114.jpg',
      Title: 'bread toast boat3',
      Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      Ingredients: ['cream', 'tomato', 'milk', 'pasta', 'lemon'],
      Instructions: ['step 1', 'step 2', 'step 3'],
      Category: 'breakfast'
    },
    {
    _id: '123',
      Image: 'assets/pexels-daniela-elena-tentis-118658-691114.jpg',
      Title: 'bread toast bo',
      Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      Ingredients: ['cream', 'tomato', 'milk', 'eggs', 'tomato', 'potato'],
      Instructions: ['step 1', 'step 2', 'step 3'],
      Category: 'breakfast'
    },
    {
    _id: '123',
      Image: 'assets/pexels-daniela-elena-tentis-118658-691114.jpg',
      Title: 'bread',
      Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      Ingredients: ['eggs', 'tomato', 'potato'],
      Instructions: ['step 1', 'step 2', 'step 3'],
      Category: 'breakfast'
    },
    {
    _id: '123',
      Image: 'assets/pexels-daniela-elena-tentis-118658-691114.jpg',
      Title: 'bread',
      Description: 'test',
      Ingredients: ['eggs', 'tomato', 'potato'],
      Instructions: ['step 1', 'step 2', 'step 3'],
      Category: 'breakfast'
    },
    {
    _id: '123',
      Image: 'string',
      Title: 'bread',
      Description: 'test',
      Ingredients: ['eggs', 'tomato', 'potato'],
      Instructions: ['step 1', 'step 2', 'step 3'],
      Category: 'breakfast'
    },
    {
    _id: '123',
      Image: 'string',
      Title: 'bread',
      Description: 'test',
      Ingredients: ['eggs', 'tomato', 'potato'],
      Instructions: ['step 1', 'step 2', 'step 3'],
      Category: 'breakfast'
    },
    {
    _id: '123',
      Image: 'string',
      Title: 'bread',
      Description: 'test',
      Ingredients: ['eggs', 'tomato', 'potato'],
      Instructions: ['step 1', 'step 2', 'step 3'],
      Category: 'breakfast'
    },
    {
    _id: '123',
      Image: 'string',
      Title: 'bread',
      Description: 'test',
      Ingredients: ['eggs', 'tomato', 'potato'],
      Instructions: ['step 1', 'step 2', 'step 3'],
      Category: 'breakfast'
    },
    {
    _id: '123',
      Image: 'string',
      Title: 'bread',
      Description: 'test',
      Ingredients: ['eggs', 'tomato', 'potato'],
      Instructions: ['step 1', 'step 2', 'step 3'],
      Category: 'breakfast'
    },
    {
    _id: '123',
      Image: 'string',
      Title: 'bread',
      Description: 'test',
      Ingredients: ['eggs', 'tomato', 'potato'],
      Instructions: ['step 1', 'step 2', 'step 3'],
      Category: 'breakfast'
    },
    {
    _id: '123',
      Image: 'string',
      Title: 'bread',
      Description: 'test',
      Ingredients: ['eggs', 'tomato', 'potato'],
      Instructions: ['step 1', 'step 2', 'step 3'],
      Category: 'breakfast'
    },
    {
    _id: '123',
      Image: 'string',
      Title: 'bread',
      Description: 'test',
      Ingredients: ['eggs', 'tomato', 'potato'],
      Instructions: ['step 1', 'step 2', 'step 3'],
      Category: 'breakfast'
    }]
  }

  // ngOnInit(): void {
  //     this.recipesService.getAllRecipes().subscribe((data) => {
  //     this.recipes = data;
  //   });
  // }
}
