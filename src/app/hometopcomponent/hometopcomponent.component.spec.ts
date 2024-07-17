import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HometopcomponentComponent } from './hometopcomponent.component';

describe('HometopcomponentComponent', () => {
  let component: HometopcomponentComponent;
  let fixture: ComponentFixture<HometopcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HometopcomponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HometopcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
