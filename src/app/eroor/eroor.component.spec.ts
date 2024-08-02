import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EroorComponent } from './eroor.component';

describe('EroorComponent', () => {
  let component: EroorComponent;
  let fixture: ComponentFixture<EroorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EroorComponent]
    });
    fixture = TestBed.createComponent(EroorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
