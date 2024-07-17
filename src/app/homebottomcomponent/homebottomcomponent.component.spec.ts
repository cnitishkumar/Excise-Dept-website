import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomebottomcomponentComponent } from './homebottomcomponent.component';

describe('HomebottomcomponentComponent', () => {
  let component: HomebottomcomponentComponent;
  let fixture: ComponentFixture<HomebottomcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomebottomcomponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomebottomcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
