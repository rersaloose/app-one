import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidbarTwoComponent } from './sidbar-two.component';

describe('SidbarTwoComponent', () => {
  let component: SidbarTwoComponent;
  let fixture: ComponentFixture<SidbarTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidbarTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidbarTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
