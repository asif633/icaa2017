import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntCommitteeFormComponent } from './int-committee-form.component';

describe('IntCommitteeFormComponent', () => {
  let component: IntCommitteeFormComponent;
  let fixture: ComponentFixture<IntCommitteeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntCommitteeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntCommitteeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
