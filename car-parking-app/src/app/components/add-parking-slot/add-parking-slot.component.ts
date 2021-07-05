import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormArray, Validators, AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-parking-slot',
  templateUrl: './add-parking-slot.component.html',
  styleUrls: ['./add-parking-slot.component.scss']
})
export class AddParkingSlotComponent implements OnInit {
   roleForm: FormGroup;
   constructor(
      private fb: FormBuilder,
      public dialogRef: MatDialogRef<AddParkingSlotComponent>,
      @Inject(MAT_DIALOG_DATA) public data,
   ) {
      this.dialogRef.disableClose = true;
   }

   ngOnInit(): void {
      this.roleForm = this.fb.group({
         //slotNumber: ['', [Validators.required]],
         bookingStatus: ['', [Validators.required]],
         bookedBy: ['', [Validators.required]],
         category: ['', [Validators.required]],         
       });
   }
   
   saveRole() {
      this.roleForm.markAllAsTouched();
      if (!this.roleForm.valid) {
        return;
      }
      this.dialogRef.close({
         //slotId: this.roleForm.controls.slotNumber.value,
         status: this.roleForm.controls.bookingStatus.value,
         bookedBy: this.roleForm.controls.bookedBy.value,
         category: this.roleForm.controls.category.value,
         date : '12/12/12 8:30'
      });
    }
   
  onNoClick(): void {
   this.dialogRef.close();
 }

}
