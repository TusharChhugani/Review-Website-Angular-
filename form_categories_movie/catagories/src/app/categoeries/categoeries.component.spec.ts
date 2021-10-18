import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoeriesComponent } from './categoeries.component';

describe('CategoeriesComponent', () => {
  let component: CategoeriesComponent;
  let fixture: ComponentFixture<CategoeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoeriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
