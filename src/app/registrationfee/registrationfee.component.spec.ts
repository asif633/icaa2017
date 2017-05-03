import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationfeeComponent } from './registrationfee.component';

describe('RegistrationfeeComponent', () => {
  let component: RegistrationfeeComponent;
  let fixture: ComponentFixture<RegistrationfeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationfeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationfeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
