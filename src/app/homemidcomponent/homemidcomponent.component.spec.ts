import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomemidcomponentComponent } from './homemidcomponent.component';

describe('HomemidcomponentComponent', () => {
  let component: HomemidcomponentComponent;
  let fixture: ComponentFixture<HomemidcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomemidcomponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomemidcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
