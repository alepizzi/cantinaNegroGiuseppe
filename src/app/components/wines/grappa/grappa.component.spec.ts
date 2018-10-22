import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrappaComponent } from './grappa.component';

describe('GrappaComponent', () => {
  let component: GrappaComponent;
  let fixture: ComponentFixture<GrappaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrappaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrappaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
