/*!
 * @license
 * Copyright 2025 Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import {Component,signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {RecipeModel} from './models';
import {MOCK_RECIPES} from './mock-recipes';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})


export class App {
  protected readonly recipe = signal<RecipeModel>(MOCK_RECIPES[0]);

    
  protected selectRecipe1(): void {
    this.recipe.set(MOCK_RECIPES[0]);
  }

   protected selectRecipe2(): void {
    this.recipe.set(MOCK_RECIPES[1]);
  }

}



