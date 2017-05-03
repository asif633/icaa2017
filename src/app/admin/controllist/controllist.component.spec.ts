import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControllistComponent } from './controllist.component';

describe('ControllistComponent', () => {
  let component: ControllistComponent;
  let fixture: ComponentFixture<ControllistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControllistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControllistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
