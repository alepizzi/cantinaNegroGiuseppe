import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsuRoseComponent } from './monsu-rose.component';

describe('MonsuRoseComponent', () => {
  let component: MonsuRoseComponent;
  let fixture: ComponentFixture<MonsuRoseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonsuRoseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonsuRoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
