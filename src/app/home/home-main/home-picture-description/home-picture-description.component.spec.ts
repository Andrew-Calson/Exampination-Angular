import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePictureDescriptionComponent } from './home-picture-description.component';

describe('HomePictureDescriptionComponent', () => {
  let component: HomePictureDescriptionComponent;
  let fixture: ComponentFixture<HomePictureDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePictureDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePictureDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
