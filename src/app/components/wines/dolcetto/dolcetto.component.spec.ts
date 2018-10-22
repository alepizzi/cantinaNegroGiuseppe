import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DolcettoComponent } from './dolcetto.component';

describe('DolcettoComponent', () => {
  let component: DolcettoComponent;
  let fixture: ComponentFixture<DolcettoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DolcettoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DolcettoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
