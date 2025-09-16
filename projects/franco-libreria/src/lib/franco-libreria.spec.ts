import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrancoLibreria } from './franco-libreria';

describe('FrancoLibreria', () => {
  let component: FrancoLibreria;
  let fixture: ComponentFixture<FrancoLibreria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrancoLibreria]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrancoLibreria);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
