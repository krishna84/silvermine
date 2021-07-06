import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

import { AppComponent } from './app.component';
import { ParkingLotsComponent } from './components/parking-lots/parking-lots.component';
import { ParkingCategoryComponent } from './components/parking-category/parking-category.component';
import { AddParkingSlotComponent } from './components/add-parking-slot/add-parking-slot.component';
import { ParkingService } from './parking.service';

@NgModule({
  declarations: [
    AppComponent,
    ParkingLotsComponent,
    ParkingCategoryComponent,
    AddParkingSlotComponent
  ],
  imports: [
     BrowserModule,
     FormsModule,
     BrowserAnimationsModule,
     NoopAnimationsModule,
     MatDialogModule,
     MatInputModule,
     MatSelectModule,
     MatButtonModule,
     MatButtonToggleModule,
     ReactiveFormsModule
  ],
   providers: [
      ParkingService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
