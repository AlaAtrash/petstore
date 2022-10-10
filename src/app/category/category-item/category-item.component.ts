import { Component, OnInit } from '@angular/core';
import { BuyServiceService } from '../../services/buy-service.service'


@Component({
  selector: 'pet-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css']
})
export class CategoryItemComponent implements OnInit {
  photo !: string;
  lable !: string;
  description !: string;
  
  constructor(private buyServiceService: BuyServiceService) { }

  ngOnInit(): void {
  }

}
