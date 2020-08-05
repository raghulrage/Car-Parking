import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMainSectionComponent } from './home-main-section.component';

describe('HomeMainSectionComponent', () => {
  let component: HomeMainSectionComponent;
  let fixture: ComponentFixture<HomeMainSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeMainSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMainSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
