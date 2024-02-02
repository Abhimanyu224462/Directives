import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPipe2Component } from './custom-pipe2.component';

describe('CustomPipe2Component', () => {
  let component: CustomPipe2Component;
  let fixture: ComponentFixture<CustomPipe2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomPipe2Component]
    });
    fixture = TestBed.createComponent(CustomPipe2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
