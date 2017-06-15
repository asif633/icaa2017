import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInvitedSpeakerTableComponent } from './admin-invited-speaker-table.component';

describe('AdminInvitedSpeakerTableComponent', () => {
  let component: AdminInvitedSpeakerTableComponent;
  let fixture: ComponentFixture<AdminInvitedSpeakerTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminInvitedSpeakerTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminInvitedSpeakerTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
