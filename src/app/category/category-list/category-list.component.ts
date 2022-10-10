import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pet-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  on: boolean= true;
  items = [
    {
      num: 1,
    },
    {
      num: 2,
    },
    {
      num: 3,
    },
    {
      num: 4,
    },
    {
      num: 5,
    },
  ]
  
  switch = () => {
   this.on = !this.on
  }

  constructor() { }

  ngOnInit(): void {
  }

}
