import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A new recipe', 'This is simply a test',
     ''),
     new Recipe('A new recipe', 'This is simply a test',
     '')
  ];

  constructor() { }

  ngOnInit() {
  }

}
