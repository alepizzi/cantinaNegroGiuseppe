import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArneisComponent } from './arneis.component';

describe('ArneisComponent', () => {
  let component: ArneisComponent;
  let fixture: ComponentFixture<ArneisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArneisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArneisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
