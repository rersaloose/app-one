import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidSectionComponent } from './slid-section.component';

describe('SlidSectionComponent', () => {
  let component: SlidSectionComponent;
  let fixture: ComponentFixture<SlidSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlidSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlidSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
