import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferencevenueComponent } from './conferencevenue.component';

describe('ConferencevenueComponent', () => {
  let component: ConferencevenueComponent;
  let fixture: ComponentFixture<ConferencevenueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConferencevenueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferencevenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
