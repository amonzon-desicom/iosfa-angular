import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegajosComponent } from './legajos.component';

describe('LegajosComponent', () => {
  let component: LegajosComponent;
  let fixture: ComponentFixture<LegajosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegajosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegajosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
