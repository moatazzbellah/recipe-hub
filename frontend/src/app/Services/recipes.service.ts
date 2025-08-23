import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Recipe } from '../Models/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private apiUrl = `${environment.apiUrl}/recipes`;

  constructor(private http: HttpClient) {}

  // Get all recipes
  getAllRecipes(): Observable<Recipe[]> {
    return this.http
      .get<{ message: string; data: Recipe[] }>(this.apiUrl)
      .pipe(map((res) => res.data));
  }

  // Get recipe by ID
  getRecipeById(id: string): Observable<Recipe> {
    return this.http
      .get<{ message: string; data: Recipe }>(`${this.apiUrl}/${id}`)
      .pipe(map((res) => res.data));
  }

  // Create recipe
  createRecipe(recipe: Recipe): Observable<Recipe> {
    return this.http
      .post<{ message: string; data: Recipe }>(this.apiUrl, recipe)
      .pipe(map((res) => res.data));
  }

  // Update recipe
  updateRecipe(id: string, recipe: Recipe): Observable<Recipe> {
    return this.http
      .patch<{ message: string; data: Recipe }>(`${this.apiUrl}/${id}`, recipe)
      .pipe(map((res) => res.data));
  }

  // Delete recipe
  deleteRecipe(id: string): Observable<void> {
    return this.http
      .delete<{ message: string }>(`${this.apiUrl}/${id}`)
      .pipe(map(() => void 0));
  }
}
