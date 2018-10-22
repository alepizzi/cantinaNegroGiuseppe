import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarbarescoPianCavalloComponent } from './barbaresco-pian-cavallo.component';

describe('BarbarescoPianCavalloComponent', () => {
  let component: BarbarescoPianCavalloComponent;
  let fixture: ComponentFixture<BarbarescoPianCavalloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarbarescoPianCavalloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarbarescoPianCavalloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
