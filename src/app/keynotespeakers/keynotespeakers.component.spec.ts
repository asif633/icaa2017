import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeynotespeakersComponent } from './keynotespeakers.component';

describe('KeynotespeakersComponent', () => {
  let component: KeynotespeakersComponent;
  let fixture: ComponentFixture<KeynotespeakersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeynotespeakersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeynotespeakersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
