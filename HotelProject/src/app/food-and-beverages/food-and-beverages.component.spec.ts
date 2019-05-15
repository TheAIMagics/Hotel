import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodAndBeveragesComponent } from './food-and-beverages.component';

describe('FoodAndBeveragesComponent', () => {
  let component: FoodAndBeveragesComponent;
  let fixture: ComponentFixture<FoodAndBeveragesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodAndBeveragesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodAndBeveragesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
