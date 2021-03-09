import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoeStoreCommonsComponent } from './shoe-store-commons.component';

describe('ShoeStoreCommonsComponent', () => {
  let component: ShoeStoreCommonsComponent;
  let fixture: ComponentFixture<ShoeStoreCommonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoeStoreCommonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoeStoreCommonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
