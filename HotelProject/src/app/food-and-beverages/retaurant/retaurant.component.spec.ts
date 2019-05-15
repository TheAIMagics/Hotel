import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetaurantComponent } from './retaurant.component';

describe('RetaurantComponent', () => {
  let component: RetaurantComponent;
  let fixture: ComponentFixture<RetaurantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetaurantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
