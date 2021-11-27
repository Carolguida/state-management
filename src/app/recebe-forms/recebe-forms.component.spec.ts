import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecebeFormsComponent } from './recebe-forms.component';

describe('RecebeFormsComponent', () => {
  let component: RecebeFormsComponent;
  let fixture: ComponentFixture<RecebeFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecebeFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecebeFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
