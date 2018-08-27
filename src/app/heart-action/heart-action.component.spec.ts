import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeartActionComponent } from './heart-action.component';

describe('HeartActionComponent', () => {
  let component: HeartActionComponent;
  let fixture: ComponentFixture<HeartActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeartActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeartActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
