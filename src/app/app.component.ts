import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'pet-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  variable = 'petstore';
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions !: Observable<string[]>;
  
  constructor(private httpClient: HttpClient) {}
     
  
  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  } 
}
