import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingCategoryComponent } from './parking-category.component';

describe('ParkingCategoryComponent', () => {
  let component: ParkingCategoryComponent;
  let fixture: ComponentFixture<ParkingCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParkingCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
