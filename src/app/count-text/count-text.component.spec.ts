import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountTextComponent } from './count-text.component';

describe('CountTextComponent', () => {
  let component: CountTextComponent;
  let fixture: ComponentFixture<CountTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
