import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleTest0Component } from './module-test0.component';

describe('ModuleTest0Component', () => {
  let component: ModuleTest0Component;
  let fixture: ComponentFixture<ModuleTest0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleTest0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleTest0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
