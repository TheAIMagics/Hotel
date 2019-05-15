import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpirencesComponent } from './expirences.component';

describe('ExpirencesComponent', () => {
  let component: ExpirencesComponent;
  let fixture: ComponentFixture<ExpirencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpirencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpirencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
