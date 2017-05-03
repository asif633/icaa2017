import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitedspeakersComponent } from './invitedspeakers.component';

describe('InvitedspeakersComponent', () => {
  let component: InvitedspeakersComponent;
  let fixture: ComponentFixture<InvitedspeakersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvitedspeakersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitedspeakersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
