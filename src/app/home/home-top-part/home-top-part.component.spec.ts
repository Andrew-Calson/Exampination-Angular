import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTopPartComponent } from './home-top-part.component';

describe('HomeTopPartComponent', () => {
  let component: HomeTopPartComponent;
  let fixture: ComponentFixture<HomeTopPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTopPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTopPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
