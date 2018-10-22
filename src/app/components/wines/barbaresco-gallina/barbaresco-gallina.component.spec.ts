import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarbarescoGallinaComponent } from './barbaresco-gallina.component';

describe('BarbarescoGallinaComponent', () => {
  let component: BarbarescoGallinaComponent;
  let fixture: ComponentFixture<BarbarescoGallinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarbarescoGallinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarbarescoGallinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
