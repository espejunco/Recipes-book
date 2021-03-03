import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Recipe } from "./recipe.model";
import { DataStorageService } from "../shared/data-storage.service";
import { RecipeService } from "./recipe.service";

@Injectable({providedIn: 'root'})
export class RecipesResolverService implements Resolve<Recipe[]> {
    constructor(private readonly dataStorageService: DataStorageService,
                private readonly recipeService: RecipeService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const recipes = this.recipeService.getRecipes();
        if (recipes.length === 0) {
            return this.dataStorageService.retrieveRecipes();
        } else {
            return recipes;
        }
    }
}