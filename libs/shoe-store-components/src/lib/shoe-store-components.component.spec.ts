import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoeStoreComponentsComponent } from './shoe-store-components.component';

describe('ShoeStoreComponentsComponent', () => {
  let component: ShoeStoreComponentsComponent;
  let fixture: ComponentFixture<ShoeStoreComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoeStoreComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoeStoreComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
