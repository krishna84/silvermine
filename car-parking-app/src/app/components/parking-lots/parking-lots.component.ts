import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddParkingSlotComponent } from '../add-parking-slot/add-parking-slot.component';
import { ParkingService } from '../../parking.service';

@Component({
  selector: 'app-parking-lots',
  templateUrl: './parking-lots.component.html',
  styleUrls: ['./parking-lots.component.scss']
})
export class ParkingLotsComponent implements OnInit {

   selectedLot:any = {};
   newSlots: any = [];
   hideSlots: boolean = false;
   showMessage: boolean = false;
   parkingLots : any = [];

   constructor(public dialog: MatDialog, service: ParkingService) {
      this.parkingLots = service.getParkingService();
   }

   ngOnInit(): void {
      localStorage.setItem('parkingLots', JSON.stringify(this.parkingLots[0]));
      const initLot = localStorage.getItem('parkingLots');
      if (initLot) {
         this.selectedLot = JSON.parse(initLot);
      } 
   }
   
   changeLot(lot) {
      localStorage.removeItem('parkingLots');
      this.selectedLot = lot;
      this.showMessage = false;
   }

   getRow(msg) {
      this.showMessage = msg;
      if (this.selectedLot === 0) {
         this.hideSlots = true;
      }
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
