import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsuNebbioloComponent } from './monsu-nebbiolo.component';

describe('MonsuNebbioloComponent', () => {
  let component: MonsuNebbioloComponent;
  let fixture: ComponentFixture<MonsuNebbioloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonsuNebbioloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonsuNebbioloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
