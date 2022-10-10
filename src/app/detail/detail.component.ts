import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BuyServiceService } from '../services/buy-service.service'
import { environment } from '../../environments/environment'


@Component({
  selector: 'pet-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  
  @Input() id !: string
  @Input() title !: string
  @Input() description !: string

  constructor(private route: ActivatedRoute,
     private buyServiceService: BuyServiceService) {
  }

  ngOnInit(): void {
   
  }

}
