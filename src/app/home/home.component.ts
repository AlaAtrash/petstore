import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pet-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  details = [
    {
      id:1,
      title: 'title 1',
      description: 'description 1'
    },
    {
      id:2,
      title: 'title 2',
      description: 'description 2'
    },
    {
      id:3,
      title: 'title 3',
      description: 'description 3'
    },
    {
      id:4,
      title: 'title 4',
      description: 'description 4'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
