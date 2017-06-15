import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInvitedSpeakersComponent } from './admin-invited-speakers.component';

describe('AdminInvitedSpeakersComponent', () => {
  let component: AdminInvitedSpeakersComponent;
  let fixture: ComponentFixture<AdminInvitedSpeakersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminInvitedSpeakersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminInvitedSpeakersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
