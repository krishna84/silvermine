import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-parking-category',
  templateUrl: './parking-category.component.html',
  styleUrls: ['./parking-category.component.scss']
})
export class ParkingCategoryComponent implements OnInit, OnChanges {

   @Input() slots = [];
   @Input() showMessage;
   @Output() change = new EventEmitter();

  constructor() { }

   ngOnInit(): void {
   }

   ngOnChanges(): void {
   }

   deleteRow(id) {    
      for(let i = 0; i < this.slots.length; ++i){
          if (this.slots[i].slotId === id) {
              this.slots.splice(i,1);
          }
      }
      if (this.slots.length === 0) {
         this.showMessage = true;
      } 
      this.change.emit(this.showMessage);
  }
   
}
