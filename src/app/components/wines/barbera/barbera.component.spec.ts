import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarberaComponent } from './barbera.component';

describe('BarberaComponent', () => {
  let component: BarberaComponent;
  let fixture: ComponentFixture<BarberaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarberaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarberaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
