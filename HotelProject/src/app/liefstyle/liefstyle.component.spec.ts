import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiefstyleComponent } from './liefstyle.component';

describe('LiefstyleComponent', () => {
  let component: LiefstyleComponent;
  let fixture: ComponentFixture<LiefstyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiefstyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiefstyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
