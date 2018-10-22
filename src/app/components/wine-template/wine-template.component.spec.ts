import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WineTemplateComponent } from './wine-template.component';

describe('WineTemplateComponent', () => {
  let component: WineTemplateComponent;
  let fixture: ComponentFixture<WineTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WineTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WineTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
