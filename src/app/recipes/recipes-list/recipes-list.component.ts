import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes:  Recipe[] = [
    new Recipe('test', 'this is simply test desc ', 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Indonesian_Food.png')
  ];
  constructor() { }

  ngOnInit() {
  }

}
