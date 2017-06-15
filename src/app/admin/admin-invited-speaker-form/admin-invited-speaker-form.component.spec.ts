import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInvitedSpeakerFormComponent } from './admin-invited-speaker-form.component';

describe('AdminInvitedSpeakerFormComponent', () => {
  let component: AdminInvitedSpeakerFormComponent;
  let fixture: ComponentFixture<AdminInvitedSpeakerFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminInvitedSpeakerFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminInvitedSpeakerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
