import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleTest1Component } from './module-test1.component';

describe('ModuleTest1Component', () => {
  let component: ModuleTest1Component;
  let fixture: ComponentFixture<ModuleTest1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleTest1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleTest1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
