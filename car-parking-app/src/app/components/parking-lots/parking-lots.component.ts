import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddParkingSlotComponent } from '../add-parking-slot/add-parking-slot.component'

@Component({
  selector: 'app-parking-lots',
  templateUrl: './parking-lots.component.html',
  styleUrls: ['./parking-lots.component.scss']
})
export class ParkingLotsComponent implements OnInit {

   
parkingLots = [
   {
      category: "Women",
      color:'pink',
     lot: "P1",
     slots: [{
       slotId: 1,
       status: 'Booked',
       bookedBy: 'Krishna',
       category: 'Women',
       date: '12/12/12 8:30'
     }, {
       slotId: 2,
       status: 'Booked',
       bookedBy: 'Raj',
       category: 'Women',
       date: '12/12/12 8:30'
     }, {
       slotId: 3,
       status: 'Booked',
       bookedBy: 'John',
       category: 'Women',
       date: '12/12/12 8:30'
     }]
   }, {
      category: "Accessibility",
      color:'yellow',
      lot: "P2",
     slots: [{
       slotId: 1,
       status: 'Booked',
       bookedBy: 'Joe',
       category: 'Accessibility',
       date: '12/12/12 8:30'
     }, {
       slotId: 2,
       status: 'Booked',
       bookedBy: 'Krishna',
       category: 'Accessibility',
       date: '12/12/12 8:30'
     }, {
       slotId: 3,
       status: 'Booked',
       bookedBy: 'David',
       category: 'Accessibility',
       date: '12/12/12 8:30'
     }]
   },
   {
      category: "Elderly",
      color:'grey',
      lot: "P3",
     slots: [{
       slotId: 1,
       status: 'Booked',
       bookedBy: 'Joe',
       category: 'Elderly',
       date: '12/12/12 8:30'
     }, {
       slotId: 2,
       status: 'Booked',
       bookedBy: 'Krishna',
       category: 'Elderly',
       date: '12/12/12 8:30'
     }, {
       slotId: 3,
       status: 'Booked',
       bookedBy: 'David',
       category: 'Elderly',
       date: '12/12/12 8:30'
     }]
   },
   {
      category: "General",
      color:'white',
      lot: "P4",
     slots: [{
       slotId: 1,
       status: 'Booked',
       bookedBy: 'Joe',
       category: 'General',
       date: '16/12/12 8:30'
     }, {
       slotId: 2,
       status: 'Booked',
       bookedBy: 'Krishna',
       category: 'General',
       date: '01/12/12 8:30'
     }, {
       slotId: 3,
       status: 'Booked',
       bookedBy: 'David',
       category: 'General',
       date: '09/12/12 8:30'
     }]
   }
]
   
   selectedLot:any = {};
   newSlots: any = [];
   hideSlots:boolean = false;

  constructor(public dialog: MatDialog) { }

   ngOnInit(): void {
      localStorage.setItem('parkingLots', JSON.stringify(this.parkingLots[0]));
      console.log(this.parkingLots);
      const initLot = localStorage.getItem('parkingLots');
      if (initLot) {
         this.selectedLot = JSON.parse(initLot);
      } 
   }
   
   changeLot(lot) {
      localStorage.removeItem('parkingLots');
      this.selectedLot = lot;
   }

   getRow(length) {
      console.log('this.selectedLot', this.selectedLot)   
  }

   openDialog(): void {
      const dialogRef = this.dialog.open(AddParkingSlotComponent, {
        width: '450px',
      });
  
      dialogRef.afterClosed().subscribe(result => {
         this.newSlots = result
         if (result) {
            this.parkingLots.map(cat => {
               if (this.newSlots.category === cat.category) {
                  this.selectedLot = cat;
                  this.selectedLot.slots.push({ slotId: cat.slots.length + 1, ...this.newSlots })
               }
            })
         }
        
      });
    }

}
