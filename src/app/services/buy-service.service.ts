import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BuyServiceService {
  status: string = 'disponible'
  constructor() { }

  buy() {
    this.status = 'pas disponbile'
  } 

  getStatus() {
    return this.status
  }

  free() {
    this.status = 'disponible'
  }

}
