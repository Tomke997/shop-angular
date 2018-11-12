import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetUpdatePageComponent } from './pet-update-page.component';

describe('PetUpdatePageComponent', () => {
  let component: PetUpdatePageComponent;
  let fixture: ComponentFixture<PetUpdatePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetUpdatePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetUpdatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
