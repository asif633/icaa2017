import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalCommitteeFormComponent } from './local-committee-form.component';

describe('LocalCommitteeFormComponent', () => {
  let component: LocalCommitteeFormComponent;
  let fixture: ComponentFixture<LocalCommitteeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalCommitteeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalCommitteeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
