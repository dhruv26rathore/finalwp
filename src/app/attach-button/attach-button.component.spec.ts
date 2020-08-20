import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttachButtonComponent } from './attach-button.component';

describe('AttachButtonComponent', () => {
  let component: AttachButtonComponent;
  let fixture: ComponentFixture<AttachButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttachButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttachButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
