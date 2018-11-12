import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerAddPageComponent } from './owner-add-page.component';

describe('OwnerAddPageComponent', () => {
  let component: OwnerAddPageComponent;
  let fixture: ComponentFixture<OwnerAddPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerAddPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerAddPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
