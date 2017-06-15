import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlenaryFormComponent } from './plenary-form.component';

describe('PlenaryFormComponent', () => {
  let component: PlenaryFormComponent;
  let fixture: ComponentFixture<PlenaryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlenaryFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlenaryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
