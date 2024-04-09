import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit  {
 productName  : string="";

  


 @Output()
 searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

 constructor() { }

 ngOnInit(): void {
 }
 search(){    
   this.searchTextChanged.emit(this.productName);
 }





}
