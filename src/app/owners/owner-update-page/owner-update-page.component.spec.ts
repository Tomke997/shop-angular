import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerUpdatePageComponent } from './owner-update-page.component';

describe('OwnerUpdatePageComponent', () => {
  let component: OwnerUpdatePageComponent;
  let fixture: ComponentFixture<OwnerUpdatePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerUpdatePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerUpdatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
