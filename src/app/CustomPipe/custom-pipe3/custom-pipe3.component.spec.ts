import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPipe3Component } from './custom-pipe3.component';

describe('CustomPipe3Component', () => {
  let component: CustomPipe3Component;
  let fixture: ComponentFixture<CustomPipe3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomPipe3Component]
    });
    fixture = TestBed.createComponent(CustomPipe3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
