import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetAddPageComponent } from './pet-add-page.component';

describe('PetAddPageComponent', () => {
  let component: PetAddPageComponent;
  let fixture: ComponentFixture<PetAddPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetAddPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetAddPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
