import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormcomponentsComponent } from './formcomponents.component';

describe('FormcomponentsComponent', () => {
  let component: FormcomponentsComponent;
  let fixture: ComponentFixture<FormcomponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormcomponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormcomponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
