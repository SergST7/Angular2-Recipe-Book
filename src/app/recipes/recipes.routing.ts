/**
 * Created by SergST on 15.03.2017.
 */

import {Routes, RouterModule} from "@angular/router";

import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";
import {RecipeStartComponent} from "./recipe-start/recipe-start.component";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";
import {RecipesComponent} from "./recipes.component";

const RECIPE_ROUTES: Routes = [
  {path: '', component: RecipesComponent,
    children: [
      {path: '', component: RecipeStartComponent },
      {path: 'new', component: RecipeEditComponent},
      {path: ':id', component: RecipeDetailComponent},
      {path: ':id/edit', component: RecipeEditComponent}
    ]}
  ];

export const recipeRoutes = RouterModule.forChild(RECIPE_ROUTES);