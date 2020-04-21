import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextOutlineComponent } from './text-outline.component';

describe('TextOutlineComponent', () => {
  let component: TextOutlineComponent;
  let fixture: ComponentFixture<TextOutlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextOutlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextOutlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
