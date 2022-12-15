import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WineTemplateComponent } from './wine-template.component';

describe('WineTemplateComponent', () => {
  let component: WineTemplateComponent;
  let fixture: ComponentFixture<WineTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WineTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WineTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
