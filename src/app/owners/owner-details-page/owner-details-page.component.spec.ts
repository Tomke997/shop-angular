import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerDetailsPageComponent } from './owner-details-page.component';

describe('OwnerDetailsPageComponent', () => {
  let component: OwnerDetailsPageComponent;
  let fixture: ComponentFixture<OwnerDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerDetailsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
